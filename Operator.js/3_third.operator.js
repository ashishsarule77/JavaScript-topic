const prompt = require('prompt-sync')();

var a;
a =Number(prompt("Enter the first value:-"));

var b;
b = Number(prompt ("Enter the second value:-"));

var c;
c = Number(prompt("Enter the third value:-"));

var d;
d = Number(prompt("Enter the forth value:-"));

var e;
e=a+b;
console.log(`The sum of two number :${e}`);

var f;
f = c+d
console.log(`The sum of two value is: ${f}`);


sum1 = e+f;
console.log(`The sum of two value is:${sum1}`);

var m;
m=e-f;
console.log(`The substraction of two number is:${m}`);
