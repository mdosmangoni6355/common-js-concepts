/**
 * Truthy:
 * 1. true
 * 2. any number (+ve, -ve) will be truthy other then 0
 * 3. any string other then empty string
 * 4. '0'
 * 5. {}
 * 6. []
 * 
 * Falsy:
 * 1. false
 * 2. 0
 * 3. '' (empty string)
 * 4. undefined
 * 5. null
 */

let x = [];
console.log(x);
if(x){
    console.log('value of x is truthy');
}
else{
    console.log('value of x is falsy');
}

// optional
// check falsy
const y = "";
if (!y){
    console.log("value is falsy");
}

// check truthy
if (!!x){
    console.log('value is truthy');
}