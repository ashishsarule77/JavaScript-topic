// 3. wap to input length and breadth of rectangle and find it's area, perimeter and diagonal.

const prompt = require('prompt-sync')();
const length =Number(prompt("Enter the length of rectangle: "));
const breadth =Number(prompt("Enter the breadth: "));

const area = length *breadth;

const perimeter =2*(length+breadth);

const diagonal  =Math.sqrt(length**2 + breadth**2);

console.log(`Area of rectangle is ${area}`);
console.log(`Perimeter of rectangle is ${perimeter}`);
console.log(`Diagonal of rectangle is ${diagonal.toFixed(2)}`);