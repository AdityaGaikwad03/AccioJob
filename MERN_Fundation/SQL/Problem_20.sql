-- Write a SQL query to fetch the names of products that start with the letters ''P'' or ''D''.

-- your code here

select Product_name from Products 
where Product_name like 'P%' or Product_name like 'D%'