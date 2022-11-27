// Sub Class And Inheritance....
class Person{
    constructor(fname,lname){
        this.firstname=fname;
        this.lastname=lname;
    }

    greeting(){
        return `Hello ${this.firstname} ${this.lastname}`;
    }

}

class Customer extends Person{
    constructor(fname,lname,phone,memberShip){
        super(fname,lname);
        // this.firstname=fname;
        // this.lastname=lname;
        this.phone=phone;
        this.memberShip=memberShip;
    }
}

let person1 = new Person("amitav","Biswas");
console.log(person1);

let Customer1=new Customer("Protap","Biswas","01771598384","Ab01332U");
console.log(Customer1);
console.log(person1.greeting());
console.log(Customer1.greeting());