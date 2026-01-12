-- Write a SQL query to fetch the names of products that have ''Product'' in their names.

-- Database Schema

-- Expected Output

-- your code here

SELECT product_name
FROM Products
WHERE product_name LIKE '%Product%';