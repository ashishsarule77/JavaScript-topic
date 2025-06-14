// 2. wap to input two numbers and swap without using third variable.

const prompt =require('prompt-sync')();
var a =parseInt(prompt("Enter the first value: "));
var b =parseInt(prompt("Enter the second value: "));

a = a + b;
b = a - b;
a = a - b;

console.log(a);
console.log(b);