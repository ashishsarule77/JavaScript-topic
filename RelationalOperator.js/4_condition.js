const prompt = require('prompt-sync')();
var num1 = parseInt(prompt("Enter any numberr: "));

if(num1%3==0 && num1%5==0);{
    console.log(`${num1}is divisible by both`);
}
else if(num1%3==0 && num1%5!=0);{
    console.log(`${num1}is divisible by 3`);
}   
else if(num1%3!=0 && num1%5==0);{
    console.log(`${num1}is divisible by 5`); 
} 
else{
    console.log(`${num}is not divisible by3 and 5`);
}   