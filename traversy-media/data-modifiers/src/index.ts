///////////////////////////////////////////////////////////////////////////////////////////////////
// Data Modifiers:

// 1. Public
// Default in TypeScript classes, but explicit keyword.

class User {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
}

// 2. Private: private members are only accessible inside the class (not even subclasses).

class User1 {
    private password: string;
    constructor(pw: string) {
        this.password = pw;
    }
}

// 3. Protected: like private but allow access from subclasses

class Base {
    protected id: number = 1;
}

class Devired extends Base {
    printId() {
        console.log(this.id); // allowed
    }
}

// 4. Abstracts: Defines methods/properties that must be implemented byt subclasses.
abstract class Shape {
    abstract area(): number;    
}

class Circle extends Shape {
    constructor(private r: number) { super(); }
    area() { return Math.PI * this.r ** 2; }
}









