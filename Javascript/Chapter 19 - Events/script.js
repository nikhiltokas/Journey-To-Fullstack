// Chapter 19: Events in JavaScript
// An event is an action or occurrence that happens in the browser, such as user interactions (clicking, typing).
// Events are used to trigger JavaScript code when "interesting changes" occur, such as user actions.
// Events are usually used to trigger an action created by user. (Not everytime)

// Types of Events:
// 1. Mouse Events    (e.g., click, double-click, mouseover)
// 2. Keyboard Events (e.g., keypress, keyup, keydown)
// 3. Form Events     (e.g., submit, change)



// The programming of events is called **Event Handling**

// Example 1: Event Handler (Mouse Event)
const var1 = document.querySelector(".box");

var1.onclick = function() {
    console.log("Div clicked using query selector!");
    var1.onmouseover = function() {                        // Nested Event: Handling mouseover inside a click event
        console.log("You hovered over the div!");
    }
};

// What's happening:
// - `onclick` is an event handler attached directly to `var1`. 
// - This type of event handling allows you to assign a function to be executed when the event occurs.
// - Nested event handling is possible, as shown by the `onmouseover` event inside the `onclick` event.




// Example 2: Event Listener
var1.addEventListener("click", function(evt) {             // `click` is the event being listened for, followed by a callback function(evt) and `evt` is the event object.
    console.log("Div clicked using addEventListener!");
    console.log(evt);                                      // Logs the event object, which contains useful information about the event.
});

// What's happening:
// - `addEventListener()` is the preferred way to handle events because you can attach multiple listeners to the same event without overwriting previous handlers.

// - It takes two arguments: 
//   1. The type of event to listen for (e.g., "click").
//   2. The function to run when the event occurs (callback function).
// - The `evt` parameter is the **event object**, which contains information about the event (e.g., which key was pressed, mouse position, etc.).