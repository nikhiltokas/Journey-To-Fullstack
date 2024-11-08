// Chapter 1 - PostgreSQL
// Introduction to Database

// What is a Database?
// A database is an organized collection of data that can be easily accessed, managed, and updated.
// It allows users to store, retrieve, and manipulate large amounts of information efficiently.

//Types of Databases:
// 1. Organised Data Storage: Store data in a structured format that allows for efficient querying and management
// 2. Unorganised Data Storage: Store data in an unstructured format that does not require a fixed schema.
// 3. Relational Databases: Use tables with rows and columns to organize data (e.g., MySQL, PostgreSQL).
// 4. NoSQL Databases: Store data in a flexible format that does not require a fixed schema (e.g., MongoDB, Cassandra).

// Database vs DBMS (Database Management System):
// A database is the actual collection of data.
// A DBMS is the software that manages and controls access to the database.

// RDBMS (Relational Database Management System):
// An RDBMS is a type of DBMS that stores data in structured tables (rows and columns) to organize data.

// What is Scheama?
// A schema defines the structure of a database, including tables, views, indexes, and constraints.

// NOTE: Please install PostgreSQL and PGAdmin before proceeding with this chapter.
// You can download it from https://www.postgresql.org/download/ and https://www.pgadmin.org/download/.

// After installation, you will get a CLI (Command Line Interface) to interact with the database called psql.
// Open the PSQL CLI and follow the steps below.

// Server [localhost]: (LEAVE DEFAUT)
// Database [postgres]: (LEAVE DEFAUT)
// Port [5432]: (LEAVE DEFAUT)
// Username [postgres]: (LEAVE DEFAUT)
// Password for user postgres: (ENTER PASSWORD)


// Commands for terminal (You can learn more commands for PostgreSQL using Docs):

// \list - List all databases. (To Verify that Databases are created)
// \c database_name - Connect to a specific database.
// \d - Show tables in the current database.
// \! cls - Clear the screen.
// CREATE DATABASE DBName; - Create a new database (You can change the DBName to your liking.)
// DROP DATABASE DBName; - Delete a specific database.
// \q - Quit PostgreSQL CLI.