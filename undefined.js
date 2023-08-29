/**
 * 8 ways to get Undefined
 * 1. variable that is not initialized will give undefined
 * 2. function with no return
 * 3. parameter that is not passed will be undefined
 * 4. if return nothing on the right side will return undefined
 * 5. property that doesn't exists on an object will give you undefined
 * 6. accessing array elements outside of the index range
 * 7. deleting an element inside an array
 * 8. set the value directly to undefined
 */

let first ;

function second(a, b){
    const sum = a + b;
}
const result = second();

function third(a, b, c, d){
    const total = a + b + c + d;
    console.log(a, b, c, d);
}
// third(4, 6, 7);

function noNegetive(a, b){
    if(a < 0 || b < 0){
        return
    }
    return a + b;
}
const total2 = noNegetive(2,-5);
// console.log(total2);

const fifth = {id: 2, name: 'osman', age: 22};
// console.log(fifth.age, fifth.salary);

const sixth = [4, 5, 6, 8, 9, 17];
// you should not do it. Instead use splice
delete sixth[1];
// console.log(sixth);
// console.log(sixth[1], sixth[5], sixth[15]);

const eight = undefined;
const ninth = null;
const data = {results: [], update: null};

// console.log(typeof eight);
console.log(typeof ninth);