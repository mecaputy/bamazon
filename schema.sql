DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
    item_id INTEGER AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    price INTEGER(20) NOT NULL,
    stock_quantity INTEGER NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Amazon Echo", "Technology", 179, 15), 
("Spork", "Homegoods", 2, 10),
("Turtleneck", "Fashion", 23, 4),
("Cactus", "Homegoods", 12, 6),
("Exercise Ball", "Fitness", 30, 2),
("Typewriter", "Office", 55, 1),
("Jigsaw Puzzle", "Games", 15, 12),
("Ottoman", "Furniture", 98, 3),
("Polaroid Camera", "Technology", 76, 9),
("Hockey Stick", "Fitness", 45, 18);
