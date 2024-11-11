// Chapter 3 - CRUD Operations
// CRUD operations are the basic building blocks of any application that interacts with a database.
// These operations include creating new records, reading existing records, updating existing records, and deleting records.

// 1. Create                                // To create a new record in a database, you typically use an INSERT statement.
// 2. Read                                  // To read existing records from a database, you typically use a SELECT statement.
// 3. Update                                // To update existing records in a database, you typically use an UPDATE statement.
// 4. Delete                                // To delete records from a database, you typically use a DELETE statement.




// Let's create a table and perform CRUD operations on it using SQL.
// SQL query synatx for creating a table:
// CREATE TABLE employees (                 // This will create a new table named 'employees'
//     id INT,                              // This will create a column named 'id' of type integer
//     age INT,                             // This will create a column named 'age' of type integer
//     name VARCHAR(255),                   // This will create a column named 'name' of type string with max length 255 characters
//     city VARCHAR(50)                     // This will create a column named 'city' of type string with max length 50 characters
// );

// VARCHAR is "variable character" data type.
// It can store any kind of text data and its size can be defined by the user.



// 1. Now let's add records into the above table "Employees":
// INSERT INTO employees (id, age, name, city)
// VALUES                (0001, 28, 'Nikhil', 'New Delhi');



// 2. To read all the records from the table:
// SELECT * FROM <tabel_name>;              // This will select all columns and rows from the specified table
// * is a wildcard character that represents all columns

// SELECT name, city FROM employees;        // This will select only the 'name' columns from the 'employees' table



// 3. To modify/update existing records in a database:
// UPDATE <table_name>
// SET <column_name> = <new_value>,
// WHERE <condition> = <value>;             // This will update the specified column with new value where condition is met
// This will update the specified column with new value where condition is met


// 4. To delete records from a database:
// DELETE FROM <table_name>
// WHERE <column_name> = <value>;            // This will delete all rows that match the specified condition