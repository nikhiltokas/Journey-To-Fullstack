// Chapter 7 - APIs (Using Express and Postman)

// What is an API?
// - API (Application Programming Interface) is a way for different software systems to communicate with each other.
// - In web development, APIs allow the frontend (client) to interact with the backend (server) to exchange data.

// What is SERVER and CLIENT?
// - Server: Stores and manages data.
// - Client: Requests data from the server and displays it (e.g., in a browser, mobile app, or frontend framework like React).


// RESTful API Rules:
// 1. Server-Client Architecture:
// - RESTful APIs follow a server-client model where the client (e.g., browser, mobile app) requests data, and the server (backend) responds with data.
// - This model keeps the server and client independent, so either can be updated or replaced without affecting the other.

// REST API Principles:
// - Stateless: Each request contains all info needed, as no client state is stored on the server.
// - Layered System: APIs can be layered with intermediaries for scalability and security.
// - Uniform Interface: Ensures consistent URIs and HTTP methods across endpoints.

// 2. Respect HTTP Methods:
// - RESTful APIs should use HTTP methods according to their intended actions:
//   - GET: Retrieve data (fetching user details).
//   - POST: Create new data (creating a new user).
//   - PUT: Fully update an existing resource (replacing user details).
//   - PATCH: Partially update an existing resource (updating only the user's email).
//   - DELETE: Remove data (deleting a user).
// - Following these conventions ensures consistency and predictability across RESTful APIs.

// JSON & APIs:
// - JSON is the standard format for data exchange in APIs. Use `JSON.stringify()` and `JSON.parse()` to convert data.