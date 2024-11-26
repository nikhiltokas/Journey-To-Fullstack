// Chapter 4 - Clauses
// Clauses in Postgres are specific conditions that can be used to filter data in a query.
// Clauses include WHERE, HAVING, ORDER BY, LIMIT, GROUP BY and OFFSET.
// These clauses help in refining the output of a query by applying various conditions.


// Clauses:

// SELECT * FROM employees
// - WHERE dept = 'Sales';
// - WHERE dept = 'HR' or dept= 'Finance';     // Only one contion needs to be true
// - WHERE dept = 'HR' and dept= 'Finance';    // Both conditions need to be true
// - WHERE dept IN ('HR', 'Finance');          // Multiple values can be checked in a single condition
// - WHERE dept NOT IN ('HR', 'Finance');      // Multiple values can be excluded in a single condition
// - WHERE salary BETWEEN 5000 AND 10000;      // Range of values can be checked
// This query selects all columns from the employees table where the department is 'Sales'.

// Learn more about WHERE clause:
// https://www.postgresql.org/docs/current/sql-select.html#SQL-WHERE
// - DISTINCT keyword.
// - LIMIT keyowrd.
// - LIKE and ILIKE keyword. "__" for one character, "%" for any number of characters.
// - ORDER BY, LIMIT, OFFSET keywords.
// - IS NULL and IS NOT NULL conditions.