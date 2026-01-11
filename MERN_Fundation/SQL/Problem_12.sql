-- Write a SQL query to fetch the transaction IDs, customer IDs, and quantities for transactions where the quantity is greater than the average quantity across all transactions.

-- Database Schema

-- your code here
SELECT transaction_id, customer_id, quantity
FROM Ecommerce_Transactions
WHERE quantity > (
    SELECT AVG(quantity)
    FROM Ecommerce_Transactions
);
