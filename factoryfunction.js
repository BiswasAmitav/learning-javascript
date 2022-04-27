/*

let person1={
    name:'Amitav Biswas',
    address:'Mnikgonj',
    speak:function(){
        console.log('Hello');
    },

};

person2={
    name:'Protap Biswas',
    address:'Satkhira',
    speak:function(){
        console.log('Hello');
    },
};

person3={
    name:'Ambika Biswas',
    address:'Magura',
    speak:function(){
        console.log('Hello');
    },
};
console.log(person1,person2,person3);
*/

//HERE THE THIS SAME TYPES OF OBJECT IS REPEAT SO , TO MAKE IT DYNAMIC WE CAN USE FACTORY AND CONSTRUCTOR FUNCTION ......




//FACTORY FUNCTION ........BY THIS FACTORY WE CAN CREATE MULTIPLE OBJECT....
function personCreator(name, address, age){
    return{
        name:name,
        address:address,
        age:age,
        // speak:function(){
        //     console.log('Hello');
        // }
        //SHORT FORM ......OF INSIDE FUNCTION ....

        speak(){
            console.log('Hello');
        },
    }
}


let person1=personCreator('Amitav','Tala Satkhira Khulna',21);
console.log(person1);