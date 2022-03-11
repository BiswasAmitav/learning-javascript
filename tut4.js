console.log('Welcome ....! In this session we will learn Arrays Objects')

let marks=[23,34,543,65,75,856,78];
const fruits=['Orange','Apple','pineapple'];
const mixed=['str',89,[45,49]];
const arr=new Array(25,26,123,'Orange');

console.log('Your arr is : '+arr,(typeof arr));
console.log('Your mixed is : '+mixed,(typeof mixed));
console.log('Your fruits is : '+fruits,(typeof fruits));
console.log('The second element of Fruits Array is : '+fruits[2]);
console.log(arr.length);
console.log(mixed.length);
console.log('The 3rd element of mixed is : '+mixed[2]);
arr[0]='amit';
console.log(arr);
let arrelement=arr[0];
console.log(arrelement);

let value1=fruits[1];
console.log(value1);
let value3=marks.indexOf(78);
console.log(value3);

console.log("====++++Welcome to My room++++======");
console.log('=============Rifat vai is at my Meettings=========');

const rifat=23;
if(rifat<25){
    console.log('rifat vai will be at profitable in trading');

}
else{
    console.log('He can not make profit in the trade');
}


let protap=marks.indexOf(856);
console.log('The index of 856 is = '+protap);

marks.push(22);
console.log(marks);

marks.unshift(00);
console.log(marks);
marks.pop();
console.log(marks);

marks.shift();
console.log(marks);

marks.splice(1,3);
console.log(marks);



marks.reverse();
console.log(marks);

let marks2=[1,2,3,4];
marks=marks.concat(marks2);
console.log(marks);

const myobj = {
    name:'Amitav',
    channel:'My channel',
    isActive:true,
    marks:[1,5,3,6]

}

console.log(myobj);
console.log(myobj['marks']);
console.log(myobj.channel);
console.log(myobj.name);
