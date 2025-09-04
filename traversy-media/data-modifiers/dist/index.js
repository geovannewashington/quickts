"use strict";
///////////////////////////////////////////////////////////////////////////////////////////////////
// Data Modifiers:
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Public
// Default in TypeScript classes, but explicit keyword.
class User {
    constructor(name) {
        this.name = name;
    }
}
// 2. Private: private members are only accessible inside the class (not even subclasses).
class User1 {
    constructor(pw) {
        this.password = pw;
    }
}
// 3. Protected: like private but allow access from subclasses
class Base {
    constructor() {
        this.id = 1;
    }
}
class Devired extends Base {
    printId() {
        console.log(this.id); // allowed
    }
}
// 4. Abstracts: Defines methods/properties that must be implemented byt subclasses.
class Shape {
}
class Circle extends Shape {
    constructor(r) {
        super();
        this.r = r;
    }
    area() { return Math.PI * Math.pow(this.r, 2); }
}
