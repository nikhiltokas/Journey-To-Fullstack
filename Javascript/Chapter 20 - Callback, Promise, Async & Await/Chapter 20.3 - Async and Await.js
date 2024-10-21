// Async and Await
// Async and Await simplify working with Promises.
// - An (async) function always returns a Promise.
// - The (await) keyword pauses the execution of its surrounding async function until the promise is resolved or rejected.

function weatherApi() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("It's raining");
            resolve(200);                   // The promise is resolved with the value 200 (Universally accepted)
        }, 1200);
    });
}

function weatherApi2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("It's cloudy");
            resolve(200);                   // The promise is resolved with the value 200 (Universally accepted)
        }, 1200);
    });
}


async function getWeatherData() {
    console.log("Checking Weather Now...");
    await weatherApi(1); //1st Call
    console.log("Checking Weather Now...");
    await weatherApi(2); //2st Call
    console.log("Checking Weather Now...");
    await weatherApi(3); //3st Call
    console.log("Checking Weather Now...");
    await weatherApi2(4); //6st Call
}

// Call the async function to check the weather
getWeatherData();