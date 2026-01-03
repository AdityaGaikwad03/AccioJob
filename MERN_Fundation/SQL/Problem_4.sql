-- Unique Departments and Company Divisions
-- Scenario
-- The HR team wants to get a list of all unique combinations of departments and company divisions present in the company. This helps them understand the organizational structure better.

-- Tables
-- staff

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
-- Task Write a SQL query to retrieve all unique pairs of department and company division from the staff table.

-- Expected Output
-- +-------------+------------------+
-- | department  | company_division |
-- +-------------+------------------+
-- | Computers   | Domestic         |
-- | Sports      | Domestic         |
-- | Automotive  | Auto & Hardware  |
-- +-------------+------------------+
-- Explanation
-- The query uses DISTINCT to remove duplicate rows and lists only unique department and company division combinations present in the staff data. This helps in understanding all distinct organizational units without repetition.

-- your code here
select distinct department, company_division from staff;