function sum(a, b, c){
    const args = [...arguments];
    // console.log(args);
    const sum = a+b+c;
    return sum;
}
const result = sum(2, 5, 8, 12, 19, 23, 34, 52);
// console.log(result);
console.log(typeof sum);