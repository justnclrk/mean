DojoQuery
Reviewing JQuery’s code, we see that they use Immediate functions.

http://code.jquery.com/jquery-1.11.0.js

They expose “$” object and “$” function to the global name space. That is it!

Our assignment is to create our own DojoQuery library that exposes $Dojo to the global namespace. Let’s go over the functionality that $Dojo should have:

The ability to click on an HTML element with a specific id.
The ability to hover on an HTML element with a specific id.
Make sure you wrap your code in an immediate function
$Dojo("someIdForSomeButton").click(function() { console.log("The button was clicked!") });
$Dojo("someOtherIdForSomeOtherButton").hover(function() { console.log("The button was hovered on!") });
Here are some hints that should help you get started:

$Dojo should be a function that returns an object (an HTML element object)
The object returned by the $Dojo function should have 2 added methods “click” and “hover”
The click method that you attach to the object returned by the $Dojo function should take in 1 parameter which is a callback that gets run on that event.
The hover method that you attach to the object returned by the $Dojo function should take in 2 parameters (what happens when you hover in and what happens when you hover out)
Your code should be wrapped in an immediate function that returns the $Dojo function. Here are some relevant built-in JS methods that should help:

document.getElementById // (makes a DOMobject accessible to JavaScript) takes in one parameter which is the id for a particular element
DOMobject.addEventListener //takes in 2 parameters 1) the event 2) the callback function (Note that this method must be run on an html element)
//Also note that you will need to pay attention to the following built in events from the DOM
DOMobject.click
DOMobject.mouseover
DOMobject.mouseout
This assignment will integrate many of the concepts you have learned so far!