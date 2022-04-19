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




let singlePerson={
    name:'Amitav Biswas',
    address:'Manikgong',
    age:22,
    sayHello:function(){
        console.log('Hi, '+this.name);
    },
    country:'Bnagladesh'
};

console.log(singlePerson);
