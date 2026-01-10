-- Question
-- hard
-- Max Score: 20
-- Write a SQL query to fetch the transaction IDs and total amounts for transactions involving products with IDs 503, 505, and 508.

-- Database Schema

-- your code here
SELECT transaction_id, total_amount
FROM Ecommerce_Transactions
WHERE product_id IN (503, 505, 508);