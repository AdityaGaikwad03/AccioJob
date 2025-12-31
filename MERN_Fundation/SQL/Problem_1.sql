-- -- Unique Company Regions and Countries
-- Scenario
-- The company wants to get a list of all unique company regions along with their corresponding countries to better understand the geographic distribution of its staff.

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
-- Task
-- Write a SQL query to select all unique combinations of company regions and countries from the staff table.

-- Expected Output
-- +------------------+---------+
-- | company_regions  | country |
-- +------------------+---------+
-- | Southeast        | USA     |
-- | Northwest        | USA     |
-- | Quebec           | Canada  |
-- | Central          | Mexico  |
-- +------------------+---------+
-- Explanation The query uses DISTINCT to ensure that each pair of company region and country appears only once, regardless of how many employees are in those regions or countries. This helps the company get a clear picture of all the different geographic areas covered without duplicates.


-- your code here
SELECT DISTINCT company_regions, country FROM staff;