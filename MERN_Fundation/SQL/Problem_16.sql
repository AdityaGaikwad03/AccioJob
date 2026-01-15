-- Write a SQL query to fetch the names of customers with customer IDs 203, 204, and 206, excluding customers named ''Bob Smith''

-- your code here
SELECT customer_name
FROM Customers
WHERE customer_id IN (203, 204, 206)
  AND customer_name <> 'Bob Smith';