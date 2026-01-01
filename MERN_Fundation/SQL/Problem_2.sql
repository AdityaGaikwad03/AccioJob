-- Filter Staff by Joining Date Range
-- Scenario:
-- The HR analytics team is conducting a workforce trend analysis to understand hiring patterns over different periods. As part of this initiative, they need to retrieve the full details of all staff members who joined the company between a specific date range.

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
-- Write a SQL query to retrieve all columns for staff members whose start date falls between '2008-01-01' and '2011-12-31' (inclusive).

-- Expected Output
-- +----+-----------+---------------------------+--------+-------------+------------+--------+---------------------+--------+-------------------+----------------+------+
-- | id | last_name | email                     | gender | department  | start_date | salary | job_title           | region | company_division  | company_regions|country|
-- +----+-----------+---------------------------+--------+-------------+------------+--------+---------------------+--------+-------------------+----------------+------+
-- | 1  | Kelley    | rkelley0@soundcloud.com   | Female | Computers   | 2009/10/02 | 67470  | Structural Engineer | 2      | Domestic          | Southeast      | USA  |
-- | 2  | Armstrong | sarmstrong1@infoseek.co.jp| Male   | Sports      | 2008/03/31 | 71869  | Financial Advisor   | 2      | Domestic          | Southeast      | USA  |
-- | 3  | Carr      | fcarr2@woothemes.com      | Male   | Automotive  | 2009/07/12 |101768  | Recruiting Manager  | 3      | Auto & Hardware   | Northwest      | USA  |
-- +----+-----------+---------------------------+--------+-------------+------------+--------+---------------------+--------+-------------------+----------------+------+
-- your code here
select * from staff where STR_TO_DATE(start_date, '%Y/%m/%d')
      BETWEEN '2008-01-01' AND '2011-12-31';