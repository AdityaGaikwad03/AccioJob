-- List Unique Departments in Descending Order
-- Scenario:
-- The HR department is updating its internal dashboard to display all the departments currently represented in the organization. They want a distinct list of department names from the staff records, and for visual clarity, they need the list to appear in descending alphabetical order.

-- Tables:
-- staff

-- +-------------------+--------------+-----------------------------------------------+
-- | Field             | Type         | Description                                   |
-- +-------------------+--------------+-----------------------------------------------+
-- | id                | int(11)      | Unique identifier for the employee            |
-- | last_name         | varchar(50)  | Last name of the employee                     |
-- | email             | varchar(50)  | Email address of the employee                 |
-- | gender            | varchar(50)  | Gender of the employee                        |
-- | department        | varchar(50)  | Department to which the employee belongs      |
-- | start_date        | varchar(50)  | Date the employee started (format unspecified)|
-- | salary            | int(11)      | Salary of the employee                        |
-- | job_title         | varchar(50)  | Title or role of the employee                 |
-- | region            | int(11)      | Region ID associated with the employee        |
-- | company_division  | varchar(50)  | Division within the company                   |
-- | company_regions   | varchar(50)  | Named region(s) of the company                |
-- | country           | varchar(50)  | Country where the employee is located         |
-- +-------------------+--------------+-----------------------------------------------+
-- Task:
-- Write a SQL query to retrieve a list of all unique department names from the staff table, and display them in descending alphabetical order.

-- Expected Output
-- +-------------+
-- | department  |
-- +-------------+
-- | Toys        |
-- | Tools       |
-- | Sports      |
-- | Shoes       |
-- | Outdoors    |
-- +-------------+


-- your code here
select DISTINCT department from staff ORDER BY department DESC;