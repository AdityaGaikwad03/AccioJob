-- Write a SQL query to count the number of customers whose names contain the letter 'a'.

SELECT COUNT(*) AS total_customers
FROM Customers
WHERE customer_name LIKE '%a%';