console.log("Hello, world!");
console.log("Hello, world!");
console.log("Hello, world!");
console.log("Hello, world!");
console.log("Hello, world!");
console.log("Hello, world!");
console.log("Hello, world!");
console.log("Hello, world!");
console.log("Hello, world!");
console.log("Hello, world!");
console.log("Hello, world!");

function sayHello() {
  console.log("Hello!");
}
sayHello();

function sayHelloToGuadalupe() {
  console.log("Hello, Guadalupe!");
}

function sayHelloToLiz() {
  console.log("Hello, Liz!");
}

function sayHelloToSamip() {
  console.log("Hello, Samip!");
}
sayHelloToGuadalupe();
sayHelloToLiz();
sayHelloToSamip();

function sayHelloTo(firstName) {
  console.log(`Hello, ${firstName}!`);
}
sayHelloTo('Isabel'); // "Hello, Isabel!"
sayHelloTo("Jane"); // "Hello, Jane!"
sayHelloTo("R2-D2"); // "Hello, R2-D2!"
sayHelloTo(1); // "Hello, 1!"
// ^ Note that in the above, JavaScript coerces the number 1 to the string "1"

function say(greeting, firstName) {
  console.log("firstName: ", firstName);
  console.log("greeting: ", greeting);
  console.log(`${greeting}, ${firstName}!`);
}
say("Goodbye", "Julio");
say("Julio", "hello");

function add(x, y) {
  return x + y;
}
console.log(add(1, 2));

function sayWithReturn(greeting, firstName) {
  return `${greeting}, ${firstName}!`
}
console.log(sayWithReturn("Hello", "Liz"));

function sayWithConsole(greeting, firstName) {
  console.log(`${greeting}, ${firstName}!`);
}
console.log(sayWithConsole("Hello", "Liz"));

function add(x, y) {
  x + y;
}
console.log(add(1, 2));

const message = `The sum of your numbers is: ${add(2, 2)}.`;
console.log(message);


function sayWithReturnAndConsole(greeting, firstName) {
  console.log('I was called!');
  return `${greeting}, ${firstName}!`;
  // console.log('I was called!');
}
console.log(sayWithReturnAndConsole("Howdy", "partner"));