// Record today's forecast or temperature
const Kelvin = 0;

// Convert today's temperature from Kelvin to Celsius
const Celsius = Kelvin - 273;

// Covert today's temperature from Celsius to Fahrenheit
let Fahrenheit = Celsius * (9/5) + 32;


// Round down the Fahrenheit temperature
Fahrenheit = Math.floor(Fahrenheit);

console.log(`The temperature is ${Fahrenheit} degrees Fahrenheit.`);

console.log(`${Kelvin} Kelvin is about ${Fahrenheit} degrees Fahrenheit`)

let Newton = Celsius * (33/100);

Newton = Math.floor(Newton);

console.log(`${Newton}`);
