let a =Symbol();
let b =Symbol();

console.log(a===b);


let person={
    name:"Amitav Biswas",
    age:23,
    [a]:"Hello World"
}

console.log(person);// Here we can see all the Item ...
console.log(Object.getOwnPropertyNames(person));//By this method we can see all the property of object ..
// by this pvs statement we'll get one array inside this with all properties of that object . 



//If we want to access symbols property then we need to call this below method ..
console.log(Object.getOwnPropertySymbols(person));



// we can pass the parameter into symbol...
let sum1=Symbol("Hellow");
let sym2=Symbol("Hello");

console.log(smy1==sym2);
