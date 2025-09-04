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

///////////////////////////////////////////////////////////////////////////////////////////////////
// Objects 

// You can explicitily declare the shape of an object
// A variable named user. 
// The type notation part ': { name: string; age: number };' means that user must be an object
// with exactly these characteristics
let user: { name: string; age: number }; 

user = { name: "Bob", age: 30 }; // assigning the object
// user = { name: "Charlie" }; // property age is missing
// If you want to reuse that type in multiple places, you can extract it into a type alias or interface:

type User = {
  name: string;
  age: number;
};

let user2: User = { name: "Bob", age: 30 };

// use ? for properties that may or may not exist:
type User2 = {
    name: string;
    age?: number;
};

let u1: User2 = { name: "Alice" }; // no number, fine.
let u2: User2 = { name: "Ana", age: 20 };

// Make properties immutable
type User3 = {
    readonly id: number;
    name: string
};

let u3: User3 = { id: 1, name: "João" };
u3.name = "TposeProgrammer";
// u3.id = 2; // cannot assign to id

// Index Signatues -> Allow objects with dynamic keys
type StringMap = {
    [key: string]: string;
};

let colors: StringMap = {
    primary: "blue",
    secondary: "green"
};

colors["accent"] = "red";
console.log(colors); // { primary: "blue", secondary: "green", acent: "red" }

// Nested Objects -> objects can contain other objcets.
type Address = {
  city: string;
  zip: string;
};

type User4 = {
  name: string;
  address: Address;
};

let u: User4 = {
  name: "Maria",
  address: { city: "Recife", zip: "50000" }
};

// Intersection types -> combine object types
type Person = { name: string };
type Employee = { company: string };

type Worker = Person & Employee;

let w: Worker = { name: "Ana", company: "OpenAI" };

///////////////////////////////////////////////////////////////////////////////////////////////////
// Type Assertion 


