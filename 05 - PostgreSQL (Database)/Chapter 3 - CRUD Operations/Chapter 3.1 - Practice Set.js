// Create an emplyee table with 10 data.
// 1. emp_id
// 2. first_name    
// 3. last_name
// 4. city
// 5. email
// 6. phone_number
// 7. hire_date
// 8. depaertment
// 9. salary



// Soluton:

// CREATE TABLE LowfiedEmployees (
//     emp_id SERIAL PRIMARY KEY,
//     first_name VARCHAR(255) NOT NULL,
// 	   last_name VARCHAR(255) NOT NULL,
//     city VARCHAR(50) NOT NULL,
// 	   email VARCHAR(100) NOT NULL UNIQUE,
// 	   phone_number DECIMAL(10) NOT NULL UNIQUE,
// 	   hire_date DATE NOT NULL DEFAULT CURRENT_DATE,
// 	   department VARCHAR(100),
// 	   salary DECIMAL(10,2) DEFAULT 30000.00
// 	);

// INSERT INTO lowfiedemployees (first_name, last_name, city, email, phone_number, department, salary)
// VALUES
// ('Nikhil', 'Tokas', 'New Delhi', nikhil.tokas@example.com, '+91 9090909090', 'CEO BITCH!', 9700000.00),
// ('Ishani', 'Singh', 'Mumbai', 'ishani.singh@example.com', '+91 9876543210', 'Marketing', 1200000.00),
// ('Anushka', 'Agarwal', 'Bangalore', 'anushka.agarwal@example.com', '+91 8765432109', 'Sales', 1500000.00),
// ('Sharad', 'Yadav', 'Hyderabad', 'sharad.yadav@example.com', '+91 7654321098', 'Engineering', 1800000.00),
// ('Sid', 'Malhotra', 'Chennai', 'sid.malhotra@example.com', '+91 9876501234', 'Product', 2100000.00),
// ('Rohan', 'Gupta', 'Kolkata', 'rohan.gupta@example.com', '+91 8765098765', 'Finance', 1100000.00),
// ('Aravind', 'Singh', 'Pune', 'aravind.singh@example.com', '+91 7650987654', 'Data Science', 2500000.00),
// ('Mitul', 'Jain', 'Ahmedabad', 'mitul.jain@example.com', '+91 9807654321', 'AI Research', 3000000.00),
// ('Deva', 'Jain', 'Jaipur', 'deva.jain@example.com', '+91 8706543210', 'Cybersecurity', 1750000.00);