// Chapter 02 - Database, Schema and Tables.
// 1. Database
// A database is a collection of data that can be accessed by the application.
// Example: Where you store all your user information.

// - To create a new database in MySQL, use the below statement.
// Syntax: CREATE DATABASE <database_name>;
// You can also create DB from PGAdmin or pg CLI.

// - To delete a database in MySQL, use the below statement.
// Syntax: DROP DATABASE <database_name>
// Note: Be careful while deleting a database as it will delete all data inside it.

// 2. Schema
// A schema defines the structure of the database
// E.g., tables, columns, relationships between tables.

// 3. Table
// A table is a collection of rows and columns.
// Each row represents a record, and each column represents a field.
// Example 1: Users table with fields like id, name, email, etc.
// Example 2: Products table with fields like id, name, price, etc
// Example 3: Images or Videos with separate table with fields like id, url, description, etc.