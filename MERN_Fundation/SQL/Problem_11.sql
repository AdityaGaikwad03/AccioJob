-- Count Sports Staff with ''son''
-- Scenario
-- The HR analytics team wants to know how many staff members working in the Sports department have a last_name that contains the substring ''son'' (for example, Johnson, Henderson). You have been asked to write a query to calculate this number.

-- Tables
-- staff:

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
-- Task
-- Write an SQL query to count the number of distinct staff members (id) from the staff table whose last_name contains the substring ''son'' and who work in the Sports department. Return the result as a single number.

-- Sample Input
-- staff table:

-- +----+-----------+-----------------------------+--------+------------+------------+--------+-----------------------+--------+----------------+-------------------+-------+
-- | id | last_name | email                       | gender | department | start_date | salary | job_title            | region | company_division | company_regions  | country |
-- +----+-----------+-----------------------------+--------+------------+------------+--------+-----------------------+--------+----------------+-------------------+--------+
-- | 1  | Kelley    | rkelley0@soundcloud.com     | Female | Computers  | 2009/10/02 | 67470  | Structural Engineer   | 2      | Domestic       | Southeast         | USA    |
-- | 2  | Armstrong | sarmstrong1@infoseek.co.jp  | Male   | Sports     | 2008/03/31 | 71869  | Financial Advisor     | 2      | Domestic       | Southeast         | USA    |
-- | 3  | Carr      | fcarr2@woothemes.com        | Male   | Automotive | 2009/07/12 | 101768 | Recruiting Manager    | 3      | Auto & Hardware | Northwest         | USA    |
-- +----+-----------+-----------------------------+--------+------------+------------+--------+-----------------------+--------+----------------+-------------------+--------+
-- Expected Output
-- +---------------------+
-- | count(distinct id)  |
-- +---------------------+
-- | 5                   |
-- +---------------------+
-- Explanation
-- The output shows the count of distinct staff members whose last_name contains ''son'' and whose department is Sports. In this example, 5 such staff members match the condition, so the result is 5.

-- your code here
SELECT COUNT(DISTINCT id) AS total_staff
FROM staff
WHERE last_name LIKE '%son%'
  AND department = 'Sports';
  