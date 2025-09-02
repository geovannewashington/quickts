"use strict";
///////////////////////////////////////////////////////////////////////////////////////////////////
// Type Assertion:
Object.defineProperty(exports, "__esModule", { value: true });
// Type assertion in TypeScript is a way of telling the compiler “trust me, I know more about the 
// type of this value than you do.”
// There are two syntax of type assertion:
// 1. Angle-bracket system:
let value = "box";
let length = value.length;
console.log(`The word '${value}' contains ${length} letters.`); // The word 'geo'contains 3 letters.
// 2. as syntax (preferred, especially in JSX/TSX):
let value1 = "dog";
let length_1 = value1.length;
// The word sun also contains 3 letters.
const message = (length === length_1)
    ? `The word '${value1}' also contains ${length} letters.`
    : `The word '${value1}' contains ${length_1} letters.`;
console.log(message);
// When to use type assertion? 
// -> when narrowing (refining it to a more specific type) a untion type:
let someValue;
someValue = "Hello";
// Compiler doesn't know it's a string here:
let strLength = someValue.length; // alternatively (<string>someValue).length;
