///////////////////////////////////////////////////////////////////////////////////////////////////
// Type Assertion:
 
// Type assertion in TypeScript is a way of telling the compiler “trust me, I know more about the 
// type of this value than you do.”

// There are two syntax of type assertion:
// 1. Angle-bracket system:
let value: unknown = "box";
let length: number = (<string>value).length; 
console.log(`The word '${value}' contains ${length} letters.`); // The word 'geo'contains 3 letters.

// 2. as syntax (preferred, especially in JSX/TSX):
let value1: any = "dog";
let length_1: number = (value1 as string).length;
        
// The word sun also contains 3 letters.
const message: string = (length === length_1) 
    ? `The word '${value1}' also contains ${length} letters.`
    : `The word '${value1}' contains ${length_1} letters.`;

console.log(message);

// When to use type assertion? 
// -> when narrowing (refining it to a more specific type) a untion type:
let someValue: string | number;

someValue = "Hello";

// Compiler doesn't know it's a string here:
let strLength: number = (someValue as string).length; // alternatively (<string>someValue).length;

///////////////////////////////////////////////////////////////////////////////////////////////////
// Functions:

// In TypeScript, you can declare what type of value each parameter should be:
function greet(name: string) : string {
    return `Hello, ${name}`;
}
console.log(greet("Tpose")); // Hello, Tpose
// greet(42); // ERROR!

// You can also specify (or let TS infer) the return type:
function add(a: number, b: number): number {
    return a + b;
}

function logMessage(msg: string): void {
    console.log(msg); // Note: even tho it returns nothing we can still use the return keyword 
                      // as a flow controller
}

// JS lets you call functions with fewer arguments than parameters. TS makes you mark that explicity:
function buildName(first: string, last?: string): string {
    // so its sort of a optional param
    return last ? `${first} ${last}` : `${first}`;
}

console.log(buildName("John"));         // ok logs just John
console.log(buildName("John", "Wick")); // ok logs John Wick










