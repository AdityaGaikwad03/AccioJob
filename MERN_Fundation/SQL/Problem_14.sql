-- Write a SQL query to fetch the transaction IDs and total amounts for transactions with even-numbered IDs

-- Database Schema

SELECT 
    Transaction_id,
    Total_amount
FROM Ecommerce_Transactions
WHERE Transaction_id % 2 = 0;