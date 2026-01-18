-- Write a SQL query to fetch the names of products that are priced above the nearest integer value of their price.

SELECT product_name
FROM Products
WHERE price > ROUND(price);