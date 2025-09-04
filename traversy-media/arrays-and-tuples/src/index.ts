const ids: number[] = [1, 2, 3]; // an array of just numbers;
// Trying to push a non-numeric value will throw an error
// ids.push("string"); // Argument of type 'string' is not assignable to parameter of type 'number'.

const mixed: (number | string)[] = ["Tpose", 123, 123, "Programmer"];  
// you can still push things onto mixed as long as they're either a number or a string.
mixed.push(69); // works just fine;
console.log(mixed); // -> [ 'Tpose', 123, 123, 'Programmer', 69 ]

// Tuple -> An array with a fixed number of elements, where each element has a specific type and order. 
const tuple: [string, number, boolean] = ["Alice", 25, true];
/*
tuple[0] must be a string
tuple[1] must be a number
tuple[2] must be a boolean
*/

// 2D Tuple Array:
let employee: [number, string][]; 
    
employee = [
    [1, "Brad"],
    [2, "John"],
    [3, "Jill"]
];
