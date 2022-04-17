console.log("hello amit");


// REFERENCE FORM ARMY FULL STACK COURSE OF STACK LEARNER(VIDEO NO: 4-5);

// const numbers= [2,3,4,56,7,89];
//if we traverse this array by using for loop its called imperative traverse....

// for(var i=0;i<numbers.length;i++){
//     console.log(numbers[i]);
// }


// ==================================
//DECLARATIVE TRAVERSE.....


// const cb = () =>{
//     console.log('hello');
// }
// numbers.forEach(cb)



// numbers.forEach(() =>{
//     console.log('Hello')
// });



// numbers.forEach(function(){
//     console.log(arguments);
// });



// numbers.forEach(function(value, index, arr){
//     console.log(value,index,arr);
// })



//now we are able to do the operation what we supposed to be do in array for a particular problem.

//even number in array
// numbers.forEach(function(value){
//     if(value%2==0){
//         console.log(value);
//     }
// });



//sum of array..
// let sum=0;
// numbers.forEach(function(v){
//     sum +=v;
// })
// console.log(sum);



// sum of array element upto specified array index;
// let sum=0;
// numbers.forEach(function(value,index){
//     if(index<3){
//         sum +=value;
//     }
// });
// console.log(sum);




// ============================================
//ARRAY MANIPULATION LIKE (DELETE , UPDATE , RE-ARRANGE OF ARRAY AND MANY MORE)



//COMPLICATED METHOD.....



// const arr=[1,2,3,null,false,4,5,'','test',6,7,8];

// let count=0;
// for (let i=0;i<arr.length;i++){
//     for(let j=i;j<arr.length-1;j++){
//         if(!arr[j]||typeof arr[j]==!'number'){
//             arr[j]=arr[j+1];
//             arr[j+1]=undefined;
//         }
//     }
    
//     if(arr[i]===undefined){
//         count++;
//     }
// }
// arr.length -=count;
// console.log(arr);




// ======================

// JAVASCRIPT FILTERED METHOD

// const arr=[1,2,3,null,false,4,5,'','test',6,7,8];
// const filteredArray= arr.filter((v) =>typeof v=='number');
// console.log(filteredArray);



// const arr=[1,2,3,null,false,4,5,'','test',6,7,8];
// const filteredArray = arr.filter(function (v){
//     return typeof v=='number';
// });
// console.log(filteredArray);




// const filteredArray = arr.filter(function (v){
//         return typeof v=='boolean';
//      });
// console.log(filteredArray);



//FIBONACCI SERIESE ....55 WILL NOT WORKS OUR COMPUTER WILL BE ON HANG
// function fib(n){
//     if(n==0|| n==1){
//         return n;
//     }
//     return fib(n-1)+fib(n-2);
// }
// console.log(fib(45));




const arr=[
    {id:1,value:10},
    {id:2,vlaue:20},
    {id:3,vlaue:30},
    {id:4,value:40},
    {id:5,value:50}
]



// const index = arr.findIndex(function(v){
//     return v.id==4;
// });
// arr[index]='totally updated';
// console.log(arr);


const index =  arr.findIndex(function(v){
    return v.id==4;
});
arr[index].value=400;
console.log(arr);