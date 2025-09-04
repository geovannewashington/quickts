"use strict";
///////////////////////////////////////////////////////////////////////////////////////////////////
// Generics:
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Generic Functions: 
function identity(value) {
    return value;
}
// Usage:
let num = identity(42); // T = number
let str = identity("Hello"); // T inferred as string 
let stringBox = {
    value: "abc",
};
let numberBox = { value: 123 };
// 3. Generic Classes
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    // return poped item or undefined if no items
    pop() {
        return this.items.pop();
    }
}
const numStack = new Stack();
numStack.push(10); // only numbers allowed
let res1 = { data: 'ok' };
let res2 = { data: 42 }; // Fine, since T is now a number.
// 5. Multiple Type Parameters
function pair(key, value) {
    return [key, value];
}
const entry = pair("id", 123); // [string, number]
