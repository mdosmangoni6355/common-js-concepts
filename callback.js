function greetings(greetHandler, name){
    greetHandler(name);
}
// const name = "Halim mama";
// const number = [5, 7, 9];
// const laptop = {name: 'Samsung', model: 'sku08', ram: 32, price: 850000};
function greetHandler(name){
    console.log('Hello World', name);
}

function greetEvening(name){
    console.log('Good Evening', name);
}

function greetNight(name){
    console.log('Good Night', name);
}

greetings(greetHandler, 'Mr Tom Hanks');
greetings(greetHandler, 'Mr Tom Brady');
greetings(greetEvening, 'Mr Tom Cruise');
greetings(greetEvening, 'Mr Tom Palmer');
greetings(greetNight, 'Mr John');
greetings(greetNight, 'Mr Rambo');