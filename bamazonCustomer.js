var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon_db"
});

connection.connect(function (error) {
    if (error) throw error;
    printItems();
});

function printItems() {
    connection.query("SELECT * FROM products", function (error) {
        if (error) throw error;
        
        results.array.forEach(element => {
            console.log("Product ID: " + element.item_id + "\n Name: " + element.name + "\n Department: " + element.department_name + "\n Price: $" + price + "\n Quantity: " + stock_quantity); 
        });
        promptPurchase();
    });

}

function promptPurchase() {
    inquirer
        .prompt({
            name: "idInput",
            type: "id",
            message: "What is the ID of the product you would like to by?"
        }, {
                name: "units",
                type: "quantity",
                message: "How many units would you like to buy?"
            }).then(function (answer) {
                var item = answer.item_id;
                var quantity = answer.quantity;

                connection.query("SELECT * FROM products WHERE item_id=?", function (error, data) {
                    if (res.length === 0) {
                        console.log("That item does not exist.");
                        promptPurchase();
                    } else if (res.length > 0) {

                        if (res[0].stock_quantity >= answer.quantity) {

                            var totalCost = answer.quantity * results[0].price;
                            var updateQuantity = results[0].stock_quantity - answer.quantity;

                            connection.query(
                                "UPDATE products SET stock_quantity = stock_quantity-? WHERE item_id=?",
                                function (error, results) {
                                    console.log("Total purchase is: $" + totalCost);
                                    connection.end();
                                }
                            );
                        } else if (answer.quantity > results[0].stock_quantity) {
                            console.log("Insufficient stock!");
                            promptPurchase();
                        }
                    }
                });
            });
        }