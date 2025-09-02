"use strict";
///////////////////////////////////////////////////////////////////////////////////////////////////
// Interfaces:
Object.defineProperty(exports, "__esModule", { value: true });
// The object 'john' implements the 'Person' interface, it's like a contract.
// 1. 'john' needs to do exactly what 'Person' specified.
const john = {
    name: "John",
    age: 25,
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    },
};
john.greet(); // Hello, my name is John
const jane = { name: 'Jane' }; // fine!
const lois = { name: 'Lois', age: 40 }; // also fine
console.log(jane); // { name: 'Jane' }
console.log(lois); // { name: 'Lois', age: 40 }
const p = { id: 1, name: "Alice" };
p.name = 'Bob'; // Allowed
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
console.log(add(2, 3)); // 5
console.log(sub(2, 3)); // -1 
// Stopped at: 5. Extending interfaces
