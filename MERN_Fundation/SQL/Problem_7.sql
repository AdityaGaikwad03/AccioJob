-- What is the average salary of male staff members who work in the "Sports" department and whose salary is equal to or above 1 lac ?

-- Table :- Staff

SELECT AVG(salary) AS average_salary
FROM staff
WHERE department = 'Sports'
  AND gender = 'Male'
  AND salary >= 100000;
