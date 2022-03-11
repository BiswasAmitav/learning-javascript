console.log('Hi Amitav is learning fuction in java Script.....!');

function greet(name){
    console.log(`Lorem ipsum dolor sit,${name} amet consectetur adipisicing elit. Praesentium rem
nam voluptatum alias odit, excepturi placeat perferendis, fugiat laboriosam
magnam voluptate blanditiis optio dicta quaerat laborum nobis. Vel, animi
vitae!`);
}

let name='amit';
let name2='partho';
 
greet(name2);

const myObj={
    name:"skill",
    game:function(){
        return "GTA";
    }
}
console.log(myObj.game());
arr=['fruit','vegetable','furnitur'];

arr.forEach(function(element,index,array){
    console.log(element,index)
});

var i=223;
console.log(i);

function ui(name){
    return `This is ${name}`;
}
console.log(ui("Amit"));
