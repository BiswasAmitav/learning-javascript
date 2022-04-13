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



const arr=[1,2,3,null,false,4,5,'','test',6,7,8];

let count=0;
for (let i=0;i<arr.length;i++){
    for(let j=i;j<arr.length-1;j++){
        if(!arr[j]||typeof arr[j]==!'number'){
            arr[j]=arr[j+1];
            arr[j+1]=undefined;
        }
    }
    
    if(arr[i]===undefined){
        count++;
    }
}
arr.length -=count;
console.log(arr);