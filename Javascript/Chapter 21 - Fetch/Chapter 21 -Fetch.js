// Chapter 21: Fetch
// The Fetch API provides a modern interface for sending HTTP requests and receiving responses.
// Fetch uses Request and Response "OBJECTS".
// The fetch() method is used to fetch resources from a server (data)
// Fetch returns a Promise that resolves once the response is received.

// There are two main types of fetch requests:
// 1. GET (retrieve data)
// 2. POST (send data)

// Example:
const callingAPI = "https://api.coindesk.com/v1/bpi/currentprice.json"  // Example API to get (GET REQUEST) Bitcoin price data.

const recINFO = async () => {   
    let response = await fetch(callingAPI);    // Initiating the GET request using fetch()
    console.log(response);                     // Logs the response object
    let showInfo = await response.json();      // json() method parses the response body into a JavaScript object
    console.log(showInfo);                     // Logs the data in JavaScript object format
}

// Call the async function to fetch and display the data
recINFO();




// Important Notes and Steps:

// 1. We initiate a get request (Mostly)
// 2. Then we recieve a response in JSON (Mostly) (Can also recieve AJAX)
// 3. We then covert JSON into JavaScript Object.
// 4. To convert JSON into JS object we use json() method. (Parsing)
// 5. json() method returns a second promise.