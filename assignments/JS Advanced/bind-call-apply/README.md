Assignment: Bind, Call, and Apply
It is possible to write exceptional code without using Bind, Call, and Apply, but these three methods can take your code to the next level.

We talked about the keyword this, and object constructors. In quick summary: when we call new Constructor(); a few things happen:

a new instance of Constructor is created that inherits from object.
the new instance is linked with the Constructor.prototype.
this is bound to the newly constructed instance.
the object is returned.
Bind, Call, and Apply allow us to regulate this.

Create an index.html file and include a main.js file.

Bower install jQuery, and include jquery before the main.js file.

Add a button to the HTML body.

<button name='button'>Click Me</button>
In your main.js file:

// our test object
var customObject = {
  name:'California, Eureka',
  onClick:function(){
    console.log("I've been clicked");
    console.log(this.name);
  }
}
// our behavior on click.
$('button').click(customObject.onClick);
In the above example: note that both the customObject and the HTML button have a name. Run it and see what happens!

Modify the button's click function to this:

$('button').click(customObject.onClick.bind(customObject));
Test it!

Now add a new object, also with a name property:

var newObject = {
  name:"West Virginia,  Montani semper liberi"
}
// modify the button method to this:
$('button').click(customObject.onClick.bind(newObject));
At this point, let’s grab a friend who is not working and explain bind to him or her!

Bind also takes an optional argument. Let’s test it out!

change main.js to this:

// our test object
var customObject = {
  name:'California, Eureka',
  onClick:function(myParam){
    console.log("I've been clicked");
    console.log(myParam, "I've been passed by bind");
    console.log(this.name);
  }
}
// our behavior on click.
$('button').click(customObject.onClick.bind(customObject,"Bind this argument!"));
Bind is a fantastic tool to control which this we are using and pass information from object to object, or use other objects methods and will help DRY out your code.

WARNING: BIND CREATES A NEW METHOD OR OVERWRITES A METHOD IN THE OBJECT

Call and Apply

First: think of Commas when you hear Call, and Arrays when you hear Apply.

Call and Apply allow us to inherit methods from other constructors:

function Ninja(name, age){
  this.name = name;
  this.age = age;
  // there could be lots of other stuff here!
}
function BlackBelt(name,age){
  //Commas!
  Ninja.call(this,name,age);
  this.belt = 'black';
}
function YellowBelt(name,age){
  //ARRAY
  Ninja.apply(this,[name,age]);
  this.belt = 'yellow';
}
var yB = new YellowBelt('mike', 40);
var bB = new BlackBelt('charlie', 29);
console.log(bB.name);
console.log(yB.name);
In this way, you can inherit from multiple parents.

Another use of call and apply: It allows us to use this, without constructing an object with new first:

function levelUp() {
  console.log(this.name + " has learned a new kata, in " + this.gender + " favorite language: " + this.language);
}
var person = {
  name: 'Lisa',
  gender: 'her',
  language: 'JavaScript, duh!'
};
levelUp.call(person);
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call