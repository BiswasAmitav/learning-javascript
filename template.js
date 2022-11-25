const firstName = "Amitav";
const lastName = "Biswas";

// const fullName = firstName + " " + lastName + " is a good boyfriend ever ";
// console.log(fullName);

//THIS IS CALL TEMPLATE..INSTEAD OF DOING ADDITION OF STRING WE CAN USE IN THIS WAY 
//AND IT IS A SMART WAY TO REDUCE CODE....
const fullName2 = `${firstName} ${lastName} is good boy. `;
console.log(fullName2);


//TECHNIQUE TO CREATE MULTILINE .....
const multiLine="I love you \n"
+"I miss you \n"
+"I need you";
console.log(multiLine);

//BY USING TEMPLATE METHOD...
const multiLine2=` I love you amitav 
I miss you Maa. 
I'm not well.`;
console.log(multiLine2);