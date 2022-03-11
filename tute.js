console.log('Welcome to tute on JavaScript...');
console.log('We are learning type conversation...Be focused...')

let myVar,myVar2;
myVar=String(34);
//myVar2=Number(myVar);
//console.log('Your Stored Number is: ' +myVar2, (typeof myVar));
let booleanVar=String(false);
console.log(booleanVar,(typeof booleanVar));

let date=String(new Date());
console.log(date,(typeof date));

let arr=String([1,2,3,4,5,6]);
console.log('It has total '+ arr.length,  (typeof arr));

let i=String(8);
//let i=34;
console.log(i,(typeof i))
let number=parseFloat('34.7834782');
console.log(number.toFixed(2),(typeof number));