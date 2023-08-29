// Strongly typed Language
// int a = 5;
// string b = 'Any Name';
// boolean c = True;
// object c = { name: 'Osman', id: 22};
// int[] numbers = [12, 45, 78];
// string[] friends = ['abul', 'babul'];

// JavaScript is a Dynamic type Programming Language
// Primitive type value
const a = 5;
const b = "Samsu akhon kopay na";
const d = true;

// Non-primitive
const c = [5, 8, 9, 15];
const student = { class: 13, id: 10};

// console.log(typeof a, typeof b, typeof c, typeof d, typeof student);

let x = 5;
let y = x;
console.log(x, y);
y = 7;
console.log(x, y);

let p = {job: 'Web developer'};
let q = p;
// q = {job: 'Back-end Developer'};
q.job = 'Front-End Developer';
console.log(p, q);