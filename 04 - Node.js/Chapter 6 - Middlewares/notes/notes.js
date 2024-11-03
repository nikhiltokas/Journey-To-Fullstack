// Chapter 6 - Middleware
// Middleware functions are functions that have access to the request object (req),
// the response object (res), and the next function in the app’s request-response cycle.

// Middleware acts as a (middle-man) middle layer, validating and verifying data before the request is fulfilled.
// Middleware functions determine whether to forward the request to the next middleware or respond
// to the user directly if the request is invalid or unauthorized.

// Common uses of middleware:
// - User validation: ensuring the request comes from an authenticated user.
// - Authorization: checking if the user has the necessary permissions or subscription.
// - Logging: keeping track of requests and responses for monitoring and debugging purposes.

// Syntax Example:
// app.use((req, res, next) => {
//    // Place middleware logic here
//    next(); // Proceed to the next middleware or route
// });

// More Tools for API Testing:
// - Postman: For testing, documenting, and automating API requests.
// - Swagger: To document and interact with APIs.