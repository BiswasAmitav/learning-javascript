//HERE WE WILL LEARN JAVASCRIPT OBJECT .... AND OBJECT METHOD ....


// var student={id:123, phone:172345, name:"Abir"};
// var student2={
//     id:131,
//     phone:1579347,
//     name:"Chandan"
// }
// var phoneNo=student.phone;
// var Name=student2["name"]
// console.log(phoneNo);
// console.log(Name)
// console.log(student2);




//OBJECT LITERAL BY SETU VAI ....

// let person= 'saidur rahman setu';
// let persons={
//     name:'Amitav Biswas',
//     address:'Manikgong',
//     age:22
// };

// console.log(persons.address);




// let singlePerson={
//     name:'Amitav Biswas',
//     address:'Manikgong',
//     age:22,
//     sayHello:function(){
//         console.log('Hi, '+this.name);//If we use this.() ...method name ...it is the dynamic approach... bcz it will call it self..
//     },
//     country:'Bnagladesh'
// };

// console.log(singlePerson);





//ALTERNATE WAY.....

// let person='address';

// let singlePerson={
//     name:'Amitav Biswas',
//     address:'Manikgong',
//     age:22,
//     sayHello:function(){
//         console.log('Hi, '+singlePerson.name);//in this line i called the previous method ....but it is not dynamic approach...
//     },
//     country:'Bnagladesh'
// };

// console.log(singlePerson);




/*
let person='address';

let singlePerson={
    name:'Amitav Biswas',
    address:'Manikgong',
    age:22,
    sayHello:function(){
        console.log('Hi, '+singlePerson.name);//in this line i called the previous method ....but it is not dynamic approach...
    },
    country:'Bnagladesh'
};

// console.log(singlePerson.person);//here if we write something.property it will show give u the undefined ...
console.log(singlePerson[person]); //it will print the MANIKGONG ....

*/


let person='sayHello';

let persons=['saidur Rahman Setu','John Doe'];

let singlePerson={
    name:'Saidur Rahman Setu',
    address:'manikgonj',
    sayHello:function(){
        console.log('Hello'+ this.name);
    }
}

console.log(singlePerson[person]());//here it is printing the inside object properties.....
