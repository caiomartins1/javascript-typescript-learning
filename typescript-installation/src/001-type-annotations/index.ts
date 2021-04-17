/* eslint-disable */ 


// Base types (inference of type)
let name: string = 'caio'; // any string: "" '' ``
let age: number = 15; // 10, 1.50, -5.34, 0xf00d, 0b1010, 0o7744
let legalAge: boolean = false; // true / false
let symbol1: symbol = Symbol('symbol-name'); // symbol
let big: bigint = 10n; // big int

// Arrays
let numArray: Array<number> = [1, 2, 3];
let num2Array: number[] = [1, 2, 3];

let sArray: Array<string> = ['1', '2', '3'];
let s2Array: string[] = ['1', '2', '3'];

// Objects
let person: { name: string, age: number, isLegalAge?: boolean} = {
  age: 30, 
  name: 'James'
};

// functions
function sum(x: number, y: number) {
  return x + y;
}

const sumAlias: (x: number, y: number) => number = (x, y) => x + y;

