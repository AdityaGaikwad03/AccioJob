-- Write a SQL query to count the number of transactions made for each product in the "Products" table.

-- Database Schema

-- Expected Output


SELECT
    product_id,
    COUNT(transaction_id) AS transaction_count
FROM Ecommerce_Transactions
GROUP BY product_id;
