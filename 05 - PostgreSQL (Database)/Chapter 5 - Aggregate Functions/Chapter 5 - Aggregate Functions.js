// Chapter 5 - Aggregate Functions
// Aggregates functions are used to perform a calculation on a set of values and return a single value.
// Some common aggregate functions include COUNT, SUM, AVG, MIN, and MAX.


// 1. COUNT function:
// Used to count the number of rows in a table or subset of data.
// Example: Finding all number of employees in an organization or users who have registed on a website.

// SELECT COUNT(*) FROM Employees;


// 2. SUM function:
// Used to calculate the total sum of a numeric column.
// Example: Calculating the total sales for a specific period, total amount spent by a user etc.

// SELECT SUM(SalesAmount) FROM Sales WHERE SaleDate BETWEEN '2023-01-01' AND '2023-12-31';


// 3. AVG function:
// Used to calculate the average value of a numeric column.
// Example: Finding the average salary of employees in an organization, average amount spent by users etc.

// SELECT AVG(Salary) FROM Employees;


// 4. MIN function:
// Used to find the minimum value in a numeric or date column.
// Example: Finding the lowest sales amount for a specific period, earliest transaction date etc.

// SELECT MIN(Salary) FROM Employees;


// 5. MAX function:
// Used to find the maximum value in a numeric or date column.
// Example: Finding the highest sales amount for a specific period, latest transaction date etc.

// SELECT MAX(Salary) FROM Employees;