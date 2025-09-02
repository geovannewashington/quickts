///////////////////////////////////////////////////////////////////////////////////////////////////
// Interfaces:

// An interface in TypeScript is a way to define the structure of an object: which properties it has, 
// their types, and optionally methods it should have.

interface Person {
    name: string;
    age: number;
    greet(): void;
}

// The object 'john' implements the 'Person' interface, it's like a contract.
// 1. 'john' needs to do exactly what 'Person' specified.
const john: Person = {
    name: "John",
    age: 25,
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    },
};

john.greet(); // Hello, my name is John

// 2. Optional properties: You can make some properties as optional with ?:
interface Person1 {
    name: string;
    age?: number; // optional
}

const jane: Person1 = { name: 'Jane' }; // fine!
const lois: Person1 = { name: 'Lois', age: 40} // also fine

console.log(jane); // { name: 'Jane' }
console.log(lois); // { name: 'Lois', age: 40 }

// 3. Readonly properties: you can make properties readonly, can only be set when the object is created
interface Person2 {
    readonly id: number;
    name: string;
}

const p: Person2 = { id: 1, name: "Alice" };
p.name = 'Bob'; // Allowed
// p.id = 25; // ERROR!

// 4. Function types: interfaces can describe functions too:
interface MathOperation { 
    (x: number, y: number): number;   
}

const add: MathOperation = (x: number, y: number): number => x + y;
const sub: MathOperation = (x: number, y: number): number => x - y;

console.log(add(2, 3)); // 5
console.log(sub(2, 3)); // -1 

// Stopped at: 5. Extending interfaces


