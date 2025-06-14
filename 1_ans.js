// 1. Wap to input two numebrs and swap using third variable.

const prompt = require("prompt-sync")();


var a =parseInt(prompt("Enter the first value: "));
var b =parseInt(prompt("Enter the second value: "));

var temp = a;
a = b;
b = temp;

console.log(a);
console.log(b);
