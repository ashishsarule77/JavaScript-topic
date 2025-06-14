// / 1. Wap to input two numebrs and swap using third variable.

// const prompt = require (`prompt-sync`)();

// num1 = parseInt(prompt("Enter the first number: "));
// num2 = parseInt(prompt("Enter the second number: "));


// var temp = num1;
// num1 = num2;
// num2= temp;

// // console.log(num1);
// console.log(num2);


// const prompt = require (`prompt-sync`)();

// const length =parseInt(prompt("Enter the lenghth of rectangle:- "));
// const breadth =parseInt(prompt("Enter the breadth of rectangle:- "));


// const area = length*breadth;
// const perimeter =2*(length+breadth);
// const diagonal =Math.sqrt(length**2+breadth**2);

// console.log(`The Area of rectangle is ${area}`);
// console.log(`The perimeter of rectangle is ${perimeter}`);
// console.log(`the digonal of rectangle is ${diagonal}`);


const prompt = require (`prompt-sync`)();

const radius =Number(prompt("Enter the radius"));

const area = Math.PI*radius**2;
const curicumeference = 2*Math.PI*radius;

console.log(`Area of circlr is ${area.toFixed(2)}`);
console.log(`Curicumeference of circle is ${curicumeference.toFixed(2)}`);

