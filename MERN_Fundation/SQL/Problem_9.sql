-- Calculate Overall Average Salary
-- Scenario:
-- The finance team is preparing a company-wide salary benchmark report and needs to understand the average compensation level across the entire staff. Your task is to calculate the overall average salary of all employees in the organization, using the available salary information from the staff records.

-- Tables:
-- Staff

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
-- Write a SQL query to calculate the overall average salary of all staff members in the company.


-- your code here
SELECT AVG(salary) AS overall_average_salary
FROM staff;
