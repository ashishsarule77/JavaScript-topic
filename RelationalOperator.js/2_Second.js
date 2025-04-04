// And operator OR operator

// var a =3;//and operator always give the right side value.
// console.log(a&&b);
// var b =4;//or operator give lift side value.
// console.log(a||B);


var x = 5;
var y = 4;
console.log(x&y);   //Binary value -(0101)
console.log(x|y);   //Binary value -(0100)



//1. wap to input two number and swap using third variable.
//2. wap to input two number and swap without using thirs variable.
//3. wap to input length and breadth of rectangle and find area,perimeter and diagonal
//4. wap to input radius of circle and find the area and there configuration.
//5. wap to create temperature calculator.
     //A). farenheit to celcius.
     //b). celcius to farenheit.
//6. wap to input five numberb and find there sum and average    


// /Q4
const prompt = require('prompt-sync')();

var radius = Number(prompt("Enter the radius of circle:"))

var area = 2* 3.14 * radius**2;
console.log("Area of circle is :",area);

var circum = 2 * 3.14 * radius;
console .log("Circumference of the circle is:",circum);

// Q1
const prompt = require ('prompt-sync')();

var a = parseInt(prompt("Enter the first value"));
var b = parseInt(prompt("Enter the second value"));

var temp = a;
a = b;
b = temp;

console.log(a);
console.log(b);

// /Q3
const prompt = require('prompt-sync');

var len = Number(prompt("Enter the length of rectangle:"));
var breadth= Number(prompt("Enter the breadth of rectangle:"));

var area = len*breadth;
console.log("Area of rectangle is;",area);

var perimeter = 2*(len + breadth);
console.log("Perimeter of rectangle:",perimeter);


// Q5
const prompt =require('prompt-sync')();

var far_temperature = parseFloat(prompt("Enter the temperature in farhenesit:"));
var cel_temperature = parseFloat(prompt("ENter the temperature in celsius"));

var into_celsius =5/9* (far_temperature - 32);
console.log("Conversion of fahreneit to celsius:",into_celsius);


// Q6
const prompt = require('prompt-sync');
var x1 = Number(prompt("ENter the first Number: "));
var x2 = Number(prompt("ENter the secomnd Number: "));
var x3 = Number(prompt("ENter the third Number: "));
var x4 = Number(prompt("ENter the fourth Number: "));
var x5 = Number(prompt("ENter the fifth Number: "));

var x6 = x1+x2+x3+x4+x5;
console.log("the sum of five number is :",x6);

var x7 = x6/5;
console.log("the average of five number is:",x7);