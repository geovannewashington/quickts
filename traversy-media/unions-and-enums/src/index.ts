///////////////////////////////////////////////////////////////////////////////////////////////////
// Unions -> we define a union type using the pipe (|) symbol;

let value: (string | number);

value = "Hello"; // valid
value = 42;      // valid

// Using union in a function:
function printValue(val: (string | number)) {
    if (typeof val === "string") {
        console.log("String value:", val);
    } else {
        console.log("Number value:", val);
    }
}

printValue("Hi"); // String value: Hi
printValue(100);  // Number value: 100

///////////////////////////////////////////////////////////////////////////////////////////////////
// Enums -> enums let you define a set of named constants. They make your code more readable.

// Numeric enum (default)
enum Direction {
    Up,
    Down,
    Left,
    Right
}

let move: Direction = Direction.Up;
console.log(move); // 0

// String enum 
enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}

let shirtColor: Color = Color.Red;
console.log(shirtColor); // "RED"




