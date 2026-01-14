-- Write a SQL query to fetch the names of products that are priced above the average price of all products.

SELECT product_name
FROM Products
WHERE price > (
    SELECT AVG(price)
    FROM Products
);