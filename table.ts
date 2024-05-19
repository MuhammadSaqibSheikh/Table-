#! /usr/bin/env/ node
import inquirer from "inquirer";

let Mytable = true;

while(Mytable){

 let myinput = await inquirer.prompt({

    type: "number",
    name: "Num",
    message:"Enter your Number",

 })
let Mynumber = myinput.Num;
// console.log(Mynumber);
if (Mynumber){
    console.log(`Here is the table of ${Mynumber} `)

    for(let i = 1; i <= 10; i++)
        {console.log(`${Mynumber} X ${i} = ${Mynumber * i}`)};
}else
 {console.log( `Enter a input in numbericsl form`);
}

let AgainAsk = await inquirer.prompt({
    type:"confirm",
    name:"userask",
    message:"Do you want to another table?",
    default: false,
})
if (AgainAsk.userask == false){
    Mytable = false
    console.log(`\n Thank you for Use my table sheet.`);
    
}


}


