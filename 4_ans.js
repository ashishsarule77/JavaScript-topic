// 4. wap to input the raidus of circle and find the area and their curicumeference.

const prompt =require('prompt-sync')();

const raidus =Number(prompt("Enter the redius of circle: "));

const area =Math. PI * raidus ** 2;
const curicumeference =2* Math.PI * raidus;

console.log(`Area of circle is ${area.toFixed(2)}`);
console.log(`Curicumeference of circle is ${curicumeference.toFixed(2)}`);



