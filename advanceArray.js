

//ARRAY MAP=================

// let arr=[1,2,3];


// let newArr=arr.map(function(num){
//     return num*2;
// });


// console.log(newArr);




// let names=['Setu','Tamim','Sakib'];
// let upperCase=names.map(function(names){
//     return names.toUpperCase();
// });

// console.log(upperCase);




//SHORTCUT TECHNIQUE FOR ARRAY MAP================
// let names=['Ambika','Robin','amitav','Protap','Partha'];

// let capatalizedArray=names.map((names)=>names.toUpperCase());
// console.log(capatalizedArray);





//HOW TO EXTRACT SPECIFIC ARRAY ELEMENTS FROM LARGE ARRAY

const characters=[
    {
        name:'amitav biswas',
        height:'6.5',
        mass:'56',
        eye_color:'blue',
        gender:'male'
    },

    {
        name:'Protap biswas',
        height:'6.5',
        mass:'55',
        eye_color:'black',
        gender:'male'
    },

    {
        name:'partha biswas',
        height:'4.5',
        mass:'35',
        eye_color:'brown',
        gender:'male'
    },
    {
        name:'baba biswas',
        height:'4.5',
        mass:'35',
        eye_color:'brown',
        gender:'male'
    }
]

//HERE WE WILL GET TOTAL ARRAY.............

// let names=characters.map(function(characters){
//     return characters.name;
// });








//BUT BY THIS REDUCE WE ACCESS SINGLE ELEMENT OF THEM 

// let result= characters.reduce(function(acc,current){
//     return acc+current.eye_color;
// }, 1);

// let result=characters.reduce((acc,current)=>{
//     // return acc+current.name;
// },{});






// let eyeColor=characters.reduce((acc,curr)=>{
//     let color=curr.eye_color;
//     if(acc[color]){
//         acc[color]=acc[color]+1;
//     }
//     else{
//         acc[color]=1;
//     }
//     return acc;
// },{});
// console.log(eyeColor);;

 




//FILTER HOW TO USE ARRAY FILTER.......

// let onlyMale=characters.filter((char)=>{
//     return char.gender==='male';
// });


// let greaterThan100=characters.filter((char)=>{
//     return char.mass>50;
// });

// console.log(greaterThan100);


//EVERY FUNCTION===========


let nums=[2,4,6,8,9];

let isEven=nums.some((num)=>{
    return num%2==0;
});

console.log(isEven);