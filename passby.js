// primitive type are pass by value

let num1 = 5;
let num2 = 7;

function multiply(a, b){
    a = 12;
    const result = a * b;
    return result;
}
// console.log(num1);
const output = multiply(num1, num2);
// console.log(output);

// object an array pass by reference
let student1 = {name: 'Ananta', partner: 'borsha'};
let student2 = {name: 'Osman', partner: 'Ananna'};

function makeMovie(couple1, couple2){
    couple1.name = 'Ononto';
    couple2.partner = 'Asha';
}
console.log(student1, student2);
makeMovie(student1, student2);