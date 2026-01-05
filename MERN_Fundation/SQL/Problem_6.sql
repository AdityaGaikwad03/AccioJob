-- Manager Not in Sales
-- Scenario
-- The HR department wants to identify all staff members who hold a position with “manager” in their job title but do not belong to the Sales department.

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
-- | start_date        | varchar(50)  | Date the employee started                     |
-- | salary            | int(11)      | Salary of the employee                        |
-- | job_title         | varchar(50)  | Title or role of the employee                 |
-- | region            | int(11)      | Region ID associated with the employee        |
-- | company_division  | varchar(50)  | Division within the company                   |
-- | company_regions   | varchar(50)  | Named region(s) of the company                |
-- | country           | varchar(50)  | Country where the employee is located         |
-- +-------------------+--------------+-----------------------------------------------+
-- Task
-- Write a SQL query to return all details of employees who have the word 'manager' in their job title and are not part of the Sales department. Ignore rows where either job_title or department is NULL.

-- Sample Input
-- staff table:

-- +----+-----------+---------------------------+--------+-------------+------------+--------+---------------------+--------+-------------------+----------------+------+
-- | id | last_name | email                     | gender | department  | start_date | salary | job_title           | region | company_division  | company_regions|country|
-- +----+-----------+---------------------------+--------+-------------+------------+--------+---------------------+--------+-------------------+----------------+------+
-- | 1  | Kelley    | rkelley0@soundcloud.com   | Female | Computers   | 2009/10/02 | 67470  | Structural Engineer | 2      | Domestic          | Southeast      | USA  |
-- | 2  | Armstrong | sarmstrong1@infoseek.co.jp| Male   | Sports      | 2008/03/31 | 71869  | Financial Advisor   | 2      | Domestic          | Southeast      | USA  |
-- | 3  | Carr      | fcarr2@woothemes.com      | Male   | Automotive  | 2009/07/12 |101768  | Recruiting Manager  | 3      | Auto & Hardware   | Northwest      | USA  |
-- +----+-----------+---------------------------+--------+-------------+------------+--------+---------------------+--------+-------------------+----------------+------+

-- Expected Output
-- +----+----------+------------------------+--------+-----------+------------+--------+-----------------------------+--------+--------------------+----------------+---------+
-- | id | last_name| email                  | gender | department| start_date | salary | job_title                   | region | company_division   | company_regions| country |
-- +----+----------+------------------------+--------+-----------+------------+--------+-----------------------------+--------+--------------------+----------------+---------+
-- |  3 | Carr     | fcarr2@woothemes.com   | Male   | Automotive| 2009/07/12 | 101768 | Recruiting Manager          | 3      | Auto & Hardware    | Northwest      | USA     |
-- | 33 | Greene   | wgreenew@blogspot.com  | Male   | Movies    | 2000/03/21 | 87057  | Assistant Manager           | 1      | Domestic           | Northeast      | USA     |
-- | 58 | Baker    | jbaker1l@usnews.com    | Male   | Games     | 2007/03/02 | 68857  | Information Systems Manager | 2      | Electronic Equipment| Southeast      | USA     |
-- +----+----------+------------------------+--------+-----------+------------+--------+-----------------------------+--------+--------------------+----------------+---------+


-- Explanation
-- This query searches for employees whose job_title contains the word 'manager', regardless of case, and excludes anyone from the Sales department. The result includes employees from various departments such as Automotive, Movies, and Games, whose job titles contain “Manager” but are not part of Sales. Each returned row includes full employee details.


-- your code here
SELECT *
FROM staff
WHERE job_title LIKE '%manager%'
  AND department != 'Sales'
  AND job_title IS NOT NULL
  AND department IS NOT NULL;