// Chapter 6 - String Functions in PostgreSQL
// String functions help manipulate and extract string data.

// 1. CONCAT: Joins strings.
// SELECT CONCAT('Hello', ' ', 'World');  // Output: Hello World

// 2. CONCAT_WS: Joins strings with a separator.
// SELECT CONCAT_WS('-', '2023', '11', '03');  // Output: 2023-11-03

// 3. SUBSTR: Extracts part of a string.
// SELECT SUBSTR('PostgreSQL', 1, 4);  // Output: Post

// 4. LEFT/RIGHT: Gets characters from the start/end of a string.
// SELECT LEFT('PostgreSQL', 4);  // Output: Post
// SELECT RIGHT('PostgreSQL', 3);  // Output: SQL

// 5. LENGTH: Counts characters in a string.
// SELECT LENGTH('PostgreSQL');  // Output: 10

// 6. UPPER/LOWER: Changes case.
// SELECT UPPER('postgresql');  // Output: POSTGRESQL
// SELECT LOWER('PostgreSQL');  // Output: postgresql

// 7. TRIM/LTRIM/RTRIM: Removes spaces.
// SELECT TRIM('   Hello   ');  // Output: Hello

// 8. REPLACE: Substitutes parts of a string.
// SELECT REPLACE('Hello World', 'World', 'PostgreSQL');  // Output: Hello PostgreSQL

// 9. POSITION: Finds the location of a substring.
// SELECT POSITION('SQL' IN 'PostgreSQL');  // Output: 8

// 10. STRING_AGG: Combines strings from multiple rows.
// SELECT STRING_AGG(name, ', ') FROM employees;  // Output: John, Jane, Smith