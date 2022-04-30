// TO MAKE ANY KIND OF CONSTRUCTOR WE SHOULD PASCAL CASE.....


function Person(name, address){
    this.name=name;
    this.address=address;
    this.hello=function(){
        console.log('Hello');
    }
}

let person1=new Person('Amitav Biswas','Satkhira');
let person2=new Person('Shimanta Kar Uthsha', 'Tangail');