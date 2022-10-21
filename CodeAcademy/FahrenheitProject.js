// This is the forecast for today and will be constant:
const kelvin = 283
//This is kelvin convertet to celcius:
var celsius = kelvin - 273
console.log(celsius)
//Convertion to fahrenheit:
let fahrenheit = celsius *(9/5)+32
let newton = celsius * (33/100)

//Fahrenheit is often decimal, so i round it down by using Math object .floor() to round it down.
fahrenheit = Math.floor(fahrenheit)
newton = Math.floor(newton)
// string interpolation log to see what the results of my variables is when used.
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
console.log(`In Denmark we like to calculate the temp in Newton which is ${newton}.`)