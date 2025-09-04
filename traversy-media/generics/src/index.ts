///////////////////////////////////////////////////////////////////////////////////////////////////
// Generics:

// 1. Generic Functions: 
function identity<T>(value: T): T {
    return value;
}

// Usage:
let num = identity<number>(42); // T = number
let str = identity("Hello");    // T inferred as string 
// T is a type parameter.

// 2. Generic Interfaces

interface Box<T> {
    value: T;
}

let stringBox: Box<string> = { 
    value: "abc",
};

let numberBox: Box<number> = { value: 123 };

// 3. Generic Classes
class Stack<T> {
    private items: T[] = [];

    push(item: T) {
        this.items.push(item);
    }
    
    // return poped item or undefined if no items
    pop(): T | undefined {
        return this.items.pop();
    }
}

const numStack = new Stack<number>();
numStack.push(10); // only numbers allowed

// 4. Default Type Parameters: Generics can have defaults
interface Response<T = string> { // T defaults to string if T parameter is not passed
    data: T;
}

let res1: Response = { data: 'ok' };
let res2: Response<number> = { data: 42 }; // Fine, since T is now a number.

// 5. Multiple Type Parameters
function pair<K, V>(key: K, value: V): [K, V] {
    return [key, value];
}

const entry = pair("id", 123); // [string, number]


















