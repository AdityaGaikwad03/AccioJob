-- How many staff members have a last name that starts with the letter "S" and an email address that ends with ".com"?

-- Table :- Staff

-- your code here
SELECT COUNT(*) 
FROM staff 
WHERE last_name LIKE 'S%' 
  AND email LIKE '%.com';