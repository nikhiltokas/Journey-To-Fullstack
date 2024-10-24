// Callback function
// A callback function is a function passed into another function as an argument.
// Which is then invoked inside the outer function to complete some kind of routine or action.

// 1. Example of callback
function calculator(a, b, callback) {
  // We created a function called calculator, with 3 arguments (a,b and calculator)
  callback(a, b);
}

calculator(1, 2, (a, b) => {
  console.log(a + b);
});




// Callback Hell or (Pyramid of Doom)
// Callback hell are nested callbacks stacked below one another forming a pyramid structure.
// This style of programming becomes difficult to understand & manage.

// 2.1 Example of callback hell
function getData(datID, callbackFunc2) {
    setTimeout(() => {
        console.log(datID);
        if (callbackFunc2) {
            callbackFunc2();
        }
    },2000);
}

getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4, () => {
                getData(5, () => {
                });        
            });        
        });
    });
});

// This is not a good way of programming. And to avoid callback hell we use Promises.