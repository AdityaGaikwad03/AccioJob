-- show databases
show databases;
-- create database
create database company_db;
create database test_db;
-- delete database
drop database test_db;
-- create a table
-- create table tab_name (
--	col_name datatype constraints,
-- secondcol,
-- thirdcol
-- );
-- check current database
select database();
-- select company_db
use company_db;
-- create users table
create table users (
id int auto_increment primary key,
name varchar(100) not null,
email varchar(150) unique,
password varchar(255) not null,
is_active boolean default true,
created_at datetime
);
-- describe table
describe users;
-- create employees table
CREATE TABLE employees (
id INT AUTO_INCREMENT PRIMARY KEY,
full_name VARCHAR(120) NOT NULL,
department VARCHAR(50),
salary DECIMAL(10,2),
joining_date DATE,
is_permanent BOOLEAN DEFAULT false
);
-- create products table
create table products (
id int auto_increment primary key,
name varchar(100) not null,
price decimal(10, 2),
stock_quantity int,
is_available boolean,
created_at datetime
);
-- show all tables
show tables;
-- insert data in users table
describe users;
insert into users (name, email, password, created_at)
values ("Jay Abhani", "[abhani57@gmail.com](mailto:abhani57@gmail.com)", 12345, now());

insert into users (name, email, password, created_at)
values ("Neha Sharma", "[nehasharma@gmail.com](mailto:nehasharma@gmail.com)", 12345678, now()),
(),
(),
();

-- retriving all records of users
select * from users;
-- adding 50 records to users
INSERT INTO users (name, email, password, is_active, created_at) VALUES
('Aarav Sharma', 'aarav.sharma@example.com', '$2y$hash001', true, '2024-01-01 10:15:00'),
('Vivaan Patel', 'vivaan.patel@example.com', '$2y$hash002', true, '2024-01-02 11:20:00'),
('Aditya Verma', 'aditya.verma@example.com', '$2y$hash003', false, '2024-01-03 09:45:00'),
('Vihaan Mehta', 'vihaan.mehta@example.com', '$2y$hash004', true, '2024-01-04 14:10:00'),
('Arjun Singh', 'arjun.singh@example.com', '$2y$hash005', true, '2024-01-05 16:30:00'),

('Sai Reddy', 'sai.reddy@example.com', '$2y$hash006', true, '2024-01-06 08:40:00'),
('Krishna Iyer', 'krishna.iyer@example.com', '$2y$hash007', false, '2024-01-07 12:00:00'),
('Rohan Das', 'rohan.das@example.com', '$2y$hash008', true, '2024-01-08 13:15:00'),
('Ananya Gupta', 'ananya.gupta@example.com', '$2y$hash009', true, '2024-01-09 17:50:00'),
('Ishita Jain', 'ishita.jain@example.com', '$2y$hash010', true, '2024-01-10 09:25:00'),

('Neha Kapoor', 'neha.kapoor@example.com', '$2y$hash011', false, '2024-01-11 11:35:00'),
('Pooja Malhotra', 'pooja.malhotra@example.com', '$2y$hash012', true, '2024-01-12 15:45:00'),
('Rahul Khanna', 'rahul.khanna@example.com', '$2y$hash013', true, '2024-01-13 18:10:00'),
('Kunal Bansal', 'kunal.bansal@example.com', '$2y$hash014', true, '2024-01-14 10:00:00'),
('Amit Mishra', 'amit.mishra@example.com', '$2y$hash015', false, '2024-01-15 12:20:00'),

('Suresh Yadav', 'suresh.yadav@example.com', '$2y$hash016', true, '2024-01-16 14:40:00'),
('Nikhil Arora', 'nikhil.arora@example.com', '$2y$hash017', true, '2024-01-17 16:55:00'),
('Deepak Chauhan', 'deepak.chauhan@example.com', '$2y$hash018', true, '2024-01-18 09:30:00'),
('Manish Pandey', 'manish.pandey@example.com', '$2y$hash019', false, '2024-01-19 11:10:00'),
('Sanjay Roy', 'sanjay.roy@example.com', '$2y$hash020', true, '2024-01-20 13:45:00'),

('Ritika Sen', 'ritika.sen@example.com', '$2y$hash021', true, '2024-01-21 15:30:00'),
('Sneha Kulkarni', 'sneha.kulkarni@example.com', '$2y$hash022', true, '2024-01-22 17:20:00'),
('Pankaj Tiwari', 'pankaj.tiwari@example.com', '$2y$hash023', false, '2024-01-23 09:50:00'),
('Ashish Goyal', 'ashish.goyal@example.com', '$2y$hash024', true, '2024-01-24 11:40:00'),
('Vikas Saxena', 'vikas.saxena@example.com', '$2y$hash025', true, '2024-01-25 14:15:00'),

('Mehul Shah', 'mehul.shah@example.com', '$2y$hash026', true, '2024-01-26 16:05:00'),
('Hardik Joshi', 'hardik.joshi@example.com', '$2y$hash027', false, '2024-01-27 18:00:00'),
('Pranav Kulkarni', 'pranav.kulkarni@example.com', '$2y$hash028', true, '2024-01-28 10:10:00'),
('Alok Tripathi', 'alok.tripathi@example.com', '$2y$hash029', true, '2024-01-29 12:35:00'),
('Shubham Agarwal', 'shubham.agarwal@example.com', '$2y$hash030', true, '2024-01-30 14:55:00'),

('Ravi Prakash', 'ravi.prakash@example.com', '$2y$hash031', false, '2024-01-31 16:40:00'),
('Karthik Nair', 'karthik.nair@example.com', '$2y$hash032', true, '2024-02-01 09:15:00'),
('Siddharth Rao', 'siddharth.rao@example.com', '$2y$hash033', true, '2024-02-02 11:25:00'),
('Varun Mallick', 'varun.mallick@example.com', '$2y$hash034', true, '2024-02-03 13:35:00'),
('Abhishek Soni', 'abhishek.soni@example.com', '$2y$hash035', false, '2024-02-04 15:45:00'),

('Mohit Chawla', 'mohit.chawla@example.com', '$2y$hash036', true, '2024-02-05 17:30:00'),
('Tarun Bhatia', 'tarun.bhatia@example.com', '$2y$hash037', true, '2024-02-06 10:05:00'),
('Naveen Khatri', 'naveen.khatri@example.com', '$2y$hash038', true, '2024-02-07 12:15:00'),
('Harsh Vardhan', 'harsh.vardhan@example.com', '$2y$hash039', false, '2024-02-08 14:25:00'),
('Yogesh Solanki', 'yogesh.solanki@example.com', '$2y$hash040', true, '2024-02-09 16:35:00'),

('Aakash Tomar', 'aakash.tomar@example.com', '$2y$hash041', true, '2024-02-10 18:00:00'),
('Rohit Choudhary', 'rohit.choudhary@example.com', '$2y$hash042', true, '2024-02-11 09:45:00'),
('Gaurav Bhatt', 'gaurav.bhatt@example.com', '$2y$hash043', false, '2024-02-12 11:55:00'),
('Sameer Sheikh', 'sameer.sheikh@example.com', '$2y$hash044', true, '2024-02-13 14:10:00'),
('Imran Khan', 'imran.khan@example.com', '$2y$hash045', true, '2024-02-14 16:20:00'),

('Zaid Ansari', 'zaid.ansari@example.com', '$2y$hash046', true, '2024-02-15 18:30:00'),
('Faizan Ali', 'faizan.ali@example.com', '$2y$hash047', false, '2024-02-16 10:40:00'),
('Rehan Siddiqui', 'rehan.siddiqui@example.com', '$2y$hash048', true, '2024-02-17 12:50:00'),
('Ayaan Khan', 'ayaan.khan@example.com', '$2y$hash049', true, '2024-02-18 15:00:00'),
('Salman Farooq', 'salman.farooq@example.com', '$2y$hash050', true, '2024-02-19 17:10:00');

select * from users;

-- adding 50 records to employees
INSERT INTO employees (full_name, department, salary, joining_date, is_permanent) VALUES
('Rahul Mehta', 'Engineering', 55000, '2021-03-15', true),
('Anjali Sharma', 'HR', 42000, '2022-01-10', true),
('Amit Patel', 'Engineering', 60000, '2020-07-05', true),
('Neha Verma', 'Marketing', 38000, '2023-06-20', false),
('Suresh Kumar', 'Finance', 52000, '2019-11-12', true),

('Pooja Nair', 'HR', 40000, '2022-09-01', false),
('Rohan Singh', 'Sales', 45000, '2023-02-18', false),
('Kunal Shah', 'Engineering', 75000, '2018-04-25', true),
('Ishita Gupta', 'Marketing', 47000, '2021-08-30', true),
('Manoj Yadav', 'Operations', 50000, '2020-12-05', true),

('Sneha Kulkarni', 'Finance', 48000, '2022-05-14', false),
('Vikas Malhotra', 'Sales', 53000, '2021-10-22', true),
('Arjun Rao', 'Engineering', 68000, '2017-06-11', true),
('Nikita Joshi', 'HR', 39000, '2023-04-03', false),
('Deepak Chauhan', 'Operations', 46000, '2022-01-19', true),

('Priya Bansal', 'Marketing', 44000, '2021-03-08', true),
('Harsh Vardhan', 'Engineering', 72000, '2019-09-17', true),
('Kavita Mishra', 'Finance', 51000, '2020-02-27', true),
('Mohit Agarwal', 'Sales', 48000, '2022-07-09', false),
('Ritu Saxena', 'Operations', 47000, '2023-08-01', false),

('Nilesh Desai', 'Engineering', 66000, '2020-01-15', true),
('Ayesha Khan', 'HR', 41000, '2021-06-12', true),
('Tarun Bhatia', 'Sales', 52000, '2019-10-10', true),
('Simran Kaur', 'Marketing', 46000, '2022-11-05', false),
('Rakesh Tiwari', 'Finance', 58000, '2018-08-19', true),

('Shubham Jain', 'Engineering', 70000, '2020-05-23', true),
('Pallavi Joshi', 'HR', 39500, '2023-02-01', false),
('Yogesh Solanki', 'Operations', 48000, '2021-07-14', true),
('Abhishek Soni', 'Sales', 51000, '2022-03-30', false),
('Meena Iyer', 'Finance', 54000, '2019-12-11', true),

('Rohit Choudhary', 'Engineering', 69000, '2018-09-09', true),
('Snehal Patil', 'Marketing', 43000, '2021-04-26', true),
('Karan Malhotra', 'Sales', 56000, '2020-06-18', true),
('Divya Shah', 'HR', 40500, '2022-10-08', false),
('Sunil Pawar', 'Operations', 49000, '2019-01-21', true),

('Alok Tripathi', 'Engineering', 74000, '2017-11-30', true),
('Rina Dutta', 'Finance', 52500, '2020-08-03', true),
('Naveen Khatri', 'Sales', 54500, '2021-09-16', true),
('Preeti Arora', 'Marketing', 45500, '2022-02-12', false),
('Gaurav Bhatt', 'Engineering', 71000, '2018-03-27', true),

('Sonal Mehta', 'HR', 42000, '2021-12-01', true),
('Manish Pandey', 'Operations', 50500, '2020-10-20', true),
('Kriti Saxena', 'Marketing', 46500, '2023-01-11', false),
('Vivek Mishra', 'Finance', 59000, '2019-05-06', true),
('Aditya Kulkarni', 'Engineering', 68000, '2022-06-28', true);

-- adding 50 record to products
INSERT INTO products (name, price, stock_quantity, is_available, created_at) VALUES
('Wireless Mouse', 799.00, 120, true, '2024-01-01 10:00:00'),
('Mechanical Keyboard', 3499.00, 45, true, '2024-01-02 11:00:00'),
('USB-C Charger 65W', 1899.00, 60, true, '2024-01-03 12:00:00'),
('Laptop Stand', 1299.00, 80, true, '2024-01-04 13:00:00'),
('Bluetooth Headphones', 2599.00, 35, true, '2024-01-05 14:00:00'),
('Webcam Full HD', 2199.00, 25, true, '2024-01-06 10:30:00'),
('External HDD 1TB', 4999.00, 15, true, '2024-01-07 11:30:00'),
('Gaming Mouse Pad', 499.00, 150, true, '2024-01-08 12:30:00'),
('Noise Cancelling Earbuds', 3999.00, 0, false, '2024-01-09 13:30:00'),
('Desk Lamp LED', 1799.00, 40, true, '2024-01-10 14:30:00'),

('Portable SSD 512GB', 6899.00, 10, true, '2024-01-11 10:15:00'),
('USB Hub 7-in-1', 1599.00, 55, true, '2024-01-12 11:15:00'),
('Wireless Presenter', 1199.00, 20, true, '2024-01-13 12:15:00'),
('Laptop Backpack', 2499.00, 65, true, '2024-01-14 13:15:00'),
('Monitor 24 Inch', 12499.00, 8, true, '2024-01-15 14:15:00'),
('Desk Organizer', 699.00, 95, true, '2024-01-16 10:45:00'),
('Office Chair', 15999.00, 5, true, '2024-01-17 11:45:00'),
('WiFi Router', 3299.00, 30, true, '2024-01-18 12:45:00'),
('Extension Board', 999.00, 110, true, '2024-01-19 13:45:00'),
('Mobile Tripod', 899.00, 0, false, '2024-01-20 14:45:00'),

('Smart Watch', 5499.00, 22, true, '2024-01-21 10:00:00'),
('Fitness Band', 2999.00, 40, true, '2024-01-22 11:00:00'),
('Power Bank 20000mAh', 2299.00, 35, true, '2024-01-23 12:00:00'),
('HDMI Cable', 599.00, 90, true, '2024-01-24 13:00:00'),
('Wireless Earphones', 1999.00, 50, true, '2024-01-25 14:00:00'),
('Keyboard Cover', 399.00, 120, true, '2024-01-26 10:30:00'),
('Laptop Cooling Pad', 1499.00, 28, true, '2024-01-27 11:30:00'),
('Smart Plug', 1299.00, 32, true, '2024-01-28 12:30:00'),
('Tablet Stand', 999.00, 70, true, '2024-01-29 13:30:00'),
('Desk Clock Digital', 1199.00, 25, true, '2024-01-30 14:30:00'),

('VR Headset', 18999.00, 3, true, '2024-02-01 10:00:00'),
('Gaming Controller', 3499.00, 18, true, '2024-02-02 11:00:00'),
('Graphics Tablet', 6499.00, 12, true, '2024-02-03 12:00:00'),
('Smart Speaker', 4599.00, 20, true, '2024-02-04 13:00:00'),
('Portable Projector', 22999.00, 2, true, '2024-02-05 14:00:00'),
('Microphone USB', 2999.00, 14, true, '2024-02-06 10:30:00'),
('Webcam Cover', 299.00, 200, true, '2024-02-07 11:30:00'),
('Ethernet Cable', 499.00, 100, true, '2024-02-08 12:30:00'),
('Smart Light Bulb', 1599.00, 45, true, '2024-02-09 13:30:00'),
('Laptop Sleeve', 1299.00, 60, true, '2024-02-10 14:30:00');

-- users
-- employees
-- products
-- select all users
select * from users;
-- users -> id, name and email
select id, name, email as user_email from users;
-- order by
select * from users
order by name desc;
-- limit
select * from users
order by id desc
limit 5;
-- distinct
select * from employees;
select distinct department from employees;
-- create students table
CREATE TABLE students (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100) NOT NULL,
email VARCHAR(150) UNIQUE NOT NULL,
course VARCHAR(100) NOT NULL,
admission_date DATE NOT NULL,
is_active BOOLEAN DEFAULT TRUE
);
-- adding 50 records to students
INSERT INTO students (name, email, course, admission_date, is_active) VALUES
('Aarav Sharma', 'aarav.sharma@student.com', 'Web Development', '2023-01-10', true),
('Vivaan Patel', 'vivaan.patel@student.com', 'Data Science', '2023-01-15', true),
('Aditya Verma', 'aditya.verma@student.com', 'Web Development', '2023-01-20', false),
('Vihaan Mehta', 'vihaan.mehta@student.com', 'Python Programming', '2023-02-01', true),
('Arjun Singh', 'arjun.singh@student.com', 'Data Analytics', '2023-02-05', true),

('Sai Reddy', 'sai.reddy@student.com', 'Web Development', '2023-02-10', true),
('Krishna Iyer', 'krishna.iyer@student.com', 'Machine Learning', '2023-02-15', false),
('Rohan Das', 'rohan.das@student.com', 'Python Programming', '2023-02-20', true),
('Ananya Gupta', 'ananya.gupta@student.com', 'Web Development', '2023-03-01', true),
('Ishita Jain', 'ishita.jain@student.com', 'Data Science', '2023-03-05', true),

('Neha Kapoor', 'neha.kapoor@student.com', 'Digital Marketing', '2023-03-10', false),
('Pooja Malhotra', 'pooja.malhotra@student.com', 'Web Development', '2023-03-15', true),
('Rahul Khanna', 'rahul.khanna@student.com', 'Data Analytics', '2023-03-20', true),
('Kunal Bansal', 'kunal.bansal@student.com', 'Python Programming', '2023-04-01', true),
('Amit Mishra', 'amit.mishra@student.com', 'Machine Learning', '2023-04-05', false),

('Suresh Yadav', 'suresh.yadav@student.com', 'Web Development', '2023-04-10', true),
('Nikhil Arora', 'nikhil.arora@student.com', 'Data Science', '2023-04-15', true),
('Deepak Chauhan', 'deepak.chauhan@student.com', 'Python Programming', '2023-04-20', true),
('Manish Pandey', 'manish.pandey@student.com', 'Digital Marketing', '2023-05-01', false),
('Sanjay Roy', 'sanjay.roy@student.com', 'Web Development', '2023-05-05', true),

('Ritika Sen', 'ritika.sen@student.com', 'Data Analytics', '2023-05-10', true),
('Sneha Kulkarni', 'sneha.kulkarni@student.com', 'Python Programming', '2023-05-15', true),
('Pankaj Tiwari', 'pankaj.tiwari@student.com', 'Web Development', '2023-05-20', false),
('Ashish Goyal', 'ashish.goyal@student.com', 'Machine Learning', '2023-06-01', true),
('Vikas Saxena', 'vikas.saxena@student.com', 'Data Science', '2023-06-05', true),

('Mehul Shah', 'mehul.shah@student.com', 'Web Development', '2023-06-10', true),
('Hardik Joshi', 'hardik.joshi@student.com', 'Digital Marketing', '2023-06-15', false),
('Pranav Kulkarni', 'pranav.kulkarni@student.com', 'Python Programming', '2023-06-20', true),
('Alok Tripathi', 'alok.tripathi@student.com', 'Data Analytics', '2023-07-01', true),
('Shubham Agarwal', 'shubham.agarwal@student.com', 'Web Development', '2023-07-05', true),

('Ravi Prakash', 'ravi.prakash@student.com', 'Machine Learning', '2023-07-10', false),
('Karthik Nair', 'karthik.nair@student.com', 'Data Science', '2023-07-15', true),
('Siddharth Rao', 'siddharth.rao@student.com', 'Web Development', '2023-07-20', true),
('Varun Mallick', 'varun.mallick@student.com', 'Python Programming', '2023-08-01', true),
('Abhishek Soni', 'abhishek.soni@student.com', 'Digital Marketing', '2023-08-05', false),

('Mohit Chawla', 'mohit.chawla@student.com', 'Web Development', '2023-08-10', true),
('Tarun Bhatia', 'tarun.bhatia@student.com', 'Data Analytics', '2023-08-15', true),
('Naveen Khatri', 'naveen.khatri@student.com', 'Python Programming', '2023-08-20', true),
('Harsh Vardhan', 'harsh.vardhan@student.com', 'Machine Learning', '2023-09-01', false),
('Yogesh Solanki', 'yogesh.solanki@student.com', 'Web Development', '2023-09-05', true),

('Aakash Tomar', 'aakash.tomar@student.com', 'Data Science', '2023-09-10', true),
('Rohit Choudhary', 'rohit.choudhary@student.com', 'Web Development', '2023-09-15', true),
('Gaurav Bhatt', 'gaurav.bhatt@student.com', 'Digital Marketing', '2023-09-20', false),
('Sameer Sheikh', 'sameer.sheikh@student.com', 'Python Programming', '2023-10-01', true),
('Imran Khan', 'imran.khan@student.com', 'Data Analytics', '2023-10-05', true);