console.log("hello amit");


// REFERENCE FORM ARMY FULL STACK COURSE OF STACK LEARNER(VIDEO NO: 4-5);

const numbers= [2,3,4,56,7,89];
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



numbers.forEach(function(value, index, arr){
    console.log(value,index,arr);
})