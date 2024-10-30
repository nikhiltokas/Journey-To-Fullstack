// Chapter 5 - Routes and Postman

// 1. What are Routes?
// - Routes define the paths/endpoints that our application responds to.
// - For example, we can create routes for viewing a homepage, submitting a form, or deleting data.

// 2. Why do we create routes?
// - Routes help us organize how the application responds to different actions or requests.
// - Each route specifies a URL (path) and an HTTP method (GET, POST, etc.) to handle different tasks.

// Real Use Cases of HTTP Methods:
// 1. GET - To retrieve or display data.
// 2. POST - To send data to the server (e.g., submitting a form, creating a user).
// 3. PUT - Fully update (overwrite/replace) an existing resource (e.g., edit profile).
// 4. PATCH - Partially update a resource (e.g., change email).
// 5. DELETE - Remove a resource (e.g., delete account).


// Importing Routes for Express

// Importing a route from a "routes" folder     (common practice)
const usersRoute = require('./routes/users');   // The 'routes' folder typically organizes route files

// Mounting the imported route in the main app
app.use('/users', usersRoute);  // Routes defined in 'users.js' will be accessible at the '/users' path


// What is Postman?
// Postman is a tool for testing and debugging API endpoints by simulating HTTP requests (GET, POST, PUT, DELETE, Etc).
// It allows developers to confirm that each route responds as expected before integrating with a front-end application.

// HTTP Status Codes:
// - Success: 200 OK, 201 Created
// - Client Error: 400 Bad Request, 404 Not Found
// - Server Error: 500 Internal Server Error