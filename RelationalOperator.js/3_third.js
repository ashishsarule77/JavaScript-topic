const prompt = require('prompt-sync')();
var x1 = Number(prompt("ENter the first Number: "));
var x2 = Number(prompt("ENter the secomnd Number: "));
var x3 = Number(prompt("ENter the third Number: "));
var x4 = Number(prompt("ENter the fourth Number: "));
var x5 = Number(prompt("ENter the fifth Number: "));

var x6 = x1+x2+x3+x4+x5;
console.log("the sum of five number is :",x6);

var x7 = x6/5;
console.log("the average of five number is:",x7);