//THE STATIC FUNCTION AND OBJECT..

class Person{
    constructor(fname,lname){
        this.firstname = fname;
        this.lastname = lname;
    }
    greeting(){
        console.log(`Hello ${this.firstname} ${this.lastname}`);
    }

    static test(){
        console.log(" I am from Static ..");
    }

}

let person1=new Person("Bala","Rastogi");
//Static function can't be access form object ....
// console.log(person1.test());//It gives your error....

//It is only accessible form Main class ...like 
console.log(Person.test());//It prints "I am from Static .."...Because it is not form the persont1 object which we created..it is from the main class...
