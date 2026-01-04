-- Count of Staff Joining After 2011 with Salary Above 50,000
-- Scenario
-- The HR department wants to find out how many staff members joined the company after ''''2011-01-01'''' and earn more than $50,000 annually. This information will help assess recent hires with higher compensation levels.

-- Tables
-- Staff

-- +-------------------+--------------+-----------------------------------------------+
-- | Field             | Type         | Description                                   |
-- +-------------------+--------------+-----------------------------------------------+
-- | id                | int(11)      | Unique identifier for the employee            |
-- | last_name         | varchar(50)  | Last name of the employee                     |
-- | email             | varchar(50)  | Email address of the employee                 |
-- | gender            | varchar(50)  | Gender of the employee                        |
-- | department        | varchar(50)  | Department to which the employee belongs      |
-- | start_date        | varchar(50)  | Date the employee started                     |
-- | salary            | int(11)      | Salary of the employee                        |
-- | job_title         | varchar(50)  | Title or role of the employee                 |
-- | region            | int(11)      | Region ID associated with the employee        |
-- | company_division  | varchar(50)  | Division within the company                   |
-- | company_regions   | varchar(50)  | Named region(s) of the company                |
-- | country           | varchar(50)  | Country where the employee is located         |
-- +-------------------+--------------+-----------------------------------------------+
-- Task
-- Write a SQL query to find the total number of staff members who joined the company after January 1st, 2011 and have a salary greater than $50,000.

-- Expected Output
-- +--------------------+
-- |    total_staff     |
-- +--------------------+
-- |        247         |
-- +--------------------+

-- your code here
SELECT COUNT(*) AS total_staff
FROM staff
WHERE STR_TO_DATE(start_date, '%Y/%m/%d') > '2011-01-01'
  AND salary > 50000;