### **Q1.** Count users grouped by `is_active`

SELECT is_active, COUNT(*) AS user_count
FROM users
GROUP BY is_active;


### **Q2.** Count only **active users**, grouped by `is_active`


SELECT is_active, COUNT(*) AS active_users
FROM users
WHERE is_active = true
GROUP BY is_active;


### **Q3.** Find how many users were created on each date (assume multiple users per day)

SELECT DATE(created_at) AS signup_date, COUNT(*) AS total_users
FROM users
GROUP BY DATE(created_at);

### **Q4.** Find signup dates where more than 2 users signed up

SELECT DATE(created_at) AS signup_date, COUNT(*) AS total_users
FROM users
GROUP BY DATE(created_at)
HAVING COUNT(*) > 2;

### **Q5.** Count users by email domain ending with `gmail.com` vs others

SELECT
  email LIKE '%gmail.com' AS is_gmail,
  COUNT(*) AS user_count
FROM users
GROUP BY is_gmail;

## 🟢 EMPLOYEES TABLE (Q6–Q12)

### **Q6.** Count employees per department

SELECT department, COUNT(*) AS employee_count
FROM employees
GROUP BY department;

### **Q7.** Find average salary per department

SELECT department, AVG(salary) AS avg_salary
FROM employees
GROUP BY department;

### **Q8.** Show departments where average salary is more than 60,000

SELECT department, AVG(salary) AS avg_salary
FROM employees
GROUP BY department
HAVING AVG(salary) > 60000;

### **Q9.** Count permanent vs non-permanent employees

SELECT is_permanent, COUNT(*) AS count
FROM employees
GROUP BY is_permanent;

### **Q10.** Count employees per department **only for permanent employees**

SELECT department, COUNT(*) AS permanent_count
FROM employees
WHERE is_permanent = true
GROUP BY department;

### **Q11.** Departments having more than 2 employees

SELECT department, COUNT(*) AS employee_count
FROM employees
GROUP BY department
HAVING COUNT(*) > 2;

### **Q12.** Show departments sorted by highest average salary

SELECT department, AVG(salary) AS avg_salary
FROM employees
GROUP BY department
ORDER BY avg_salary DESC;

## 🟢 PRODUCTS TABLE (Q13–Q16)

### **Q13.** Count products grouped by availability

SELECT is_available, COUNT(*) AS product_count
FROM products
GROUP BY is_available;

### **Q14.** Find total stock value per availability status

SELECT is_available, SUM(price * stock_quantity) AS total_value
FROM products
GROUP BY is_available;

### **Q15.** Show availability groups where total stock value > 10,000

SELECT is_available, SUM(price * stock_quantity) AS total_value
FROM products
GROUP BY is_available
HAVING SUM(price * stock_quantity) > 10000;

### **Q16.** Count products added on each date

SELECT DATE(created_at) AS created_date, COUNT(*) AS product_count
FROM products
GROUP BY DATE(created_at);

## 🟢 STUDENTS TABLE (Q17–Q20)

### **Q17.** Count students per course

SELECT course, COUNT(*) AS student_count
FROM students
GROUP BY course;

### **Q18.** Count active students per course

SELECT course, COUNT(*) AS active_students
FROM students
WHERE is_active = true
GROUP BY course;

### **Q19.** Show courses having more than 3 students

SELECT course, COUNT(*) AS student_count
FROM students
GROUP BY course
HAVING COUNT(*) > 3;

### **Q20.** Show courses sorted by highest number of students

SELECT course, COUNT(*) AS student_count
FROM students
GROUP BY course
ORDER BY student_count DESC;
