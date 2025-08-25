"use strict";
///////////////////////////////////////////////////////////////////////////////////////////////////
// Unions -> we define a union type using the pipe (|) symbol;
Object.defineProperty(exports, "__esModule", { value: true });
let value;
value = "Hello"; // valid
value = 42; // valid
// Using union in a function:
function printValue(val) {
    if (typeof val === "string") {
        console.log("String value:", val);
    }
    else {
        console.log("Number value:", val);
    }
}
printValue("Hi"); // String value: Hi
printValue(100); // Number value: 100
///////////////////////////////////////////////////////////////////////////////////////////////////
// Enums -> enums let you define a set of named constants. They make your code more readable.
// Numeric enum (default)
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
let move = Direction.Up;
console.log(move); // 0
// String enum 
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
let shirtColor = Color.Red;
console.log(shirtColor); // "RED"
///////////////////////////////////////////////////////////////////////////////////////////////////
// Objects 
// You can explicitily declare the shape of an object
// A variable named user. 
// The type notation part ': { name: string; age: number };' means that user must be an object
// with exactly these characteristics
let user;
user = { name: "Bob", age: 30 }; // assigning the object
let user2 = { name: "Bob", age: 30 };
let u1 = { name: "Alice" }; // no number, fine.
let u2 = { name: "Ana", age: 20 };
let u3 = { id: 1, name: "João" };
u3.name = "TposeProgrammer";
let colors = {
    primary: "blue",
    secondary: "green"
};
colors["accent"] = "red";
console.log(colors); // { primary: "blue", secondary: "green", acent: "red" }
let u = {
    name: "Maria",
    address: { city: "Recife", zip: "50000" }
};
console.log(Worker);
let w = { name: "Ana", company: "OpenAI" };
