// Chapter 6 - Loops
// For Loop
// A for loop will repeat a code for a LIMITED amonut of time. (Until the statement becomes false)

/*
Imagine you want to print few numbers. But imagine you want to print more than 20,000 numbers.
Loops are used to print a repeated action. It help us to automate tasks.
NOTE: Some loops can be infinte, so we have to be careful.

Loop is broken down in three segments:
1. Initialize (let i=0;)
2. Verify Condition (i<6;)
3. Run iteration/Afterthought (i++) // In our case Increment.

Example:
- for (Statement 1; Statement 2; Statement 3)
- for (initialization; Verify Condition; Run Iteration/Afterthought)
- Syntax: for (let i=0; i<6; i++)

1. The initializing statement "initialization" will be executed. //This expression can also declare variables.
2. The "Condition" is evaluated and executes if the statement is true.
3. The "Afterthought" then updates the "initialization" statement. And the code repeats.

If "Statement 2" becomes false, the code will be terminated.
*/


// Example 1:
for (let abc=0; abc<3; abc++) {
   console.log(abc);  // Expected outcome: 0,1,2
}


// Example 2:
for (let abc=1; abc<6; abc+=2) {
    console.log(abc);  // Expected outcome: 1,3,5
 }


// Example 3:
for (let abc=5; abc>=0; abc-=1) {
    console.log(abc); // Expected outcome: 5,4,3,2,1,0
 }