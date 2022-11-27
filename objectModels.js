//THIS IS THE GENERAL WAY TO DECLARE ..

// let person1={
//     firstName:"Devkaron Das",
//     lastName:"Anik Kumar choudhuri",
//     dob:"11-10-1999",
//     fullName:function(){
//         console.log(`${this.firstName} ${this.lastName}}`)
//     }
// }

// person2={
//     firstName:"Md Sohag",
//     lastName:"Sheikh",
//     dob:"12-11-1999",
//     fullName:function(){
//     console.log(`${this.firstName} ${this.lastName}`);
//     }
// }
// console.log(person1.fullName());
// console.log(person2);



class Person{
    constructor(fName,lName){
        this.firstName=fName;
        this.lastName=lName;
    }

    // calculateAge(){
    //     let birthday=new Date(this.dob);
    //     let diff=date.now()-birthday.getTime();
    //     let ageDate=new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear()-1970);
    // }
    fullName(){
        console.log(this.firstName+' '+this.lastName)
    }
}

let person1 = new Person("Amitav","Biswas");
//  let person2 = new Person();
// console.log(person2);
console.log(person1.fullName());