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
