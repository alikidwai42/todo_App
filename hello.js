// function sum (num1,num2,callback){
// let result = num1+num2;
// callback(result);


// }
// function displayResult(data){
//     console.log("print sum is "+data);

// }
// function displayResultPassive(data){

//     console.log("print sum is passive "+data);
// }
// const ans =sum (1,2,displayResultPassive);

const { error } = require("console");
const fs = require("fs");

 fs.readFile("a.txt","utf-8",(err,data)=>{
    console.log(data)
    let ali="yo yo honey i got the money"
 fs.writeFile("a.txt",ali+data,(err)=>{
    if(err){
        console.log("error")
    }
 })
 })
 

