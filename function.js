// console.log("hello, I am function");
// function sayLoveYou(){
//     console.log('BIlly baby.... koi tumi....')
//     console.log("babu khaicho....!");
//     console.log('Kobita: ');
//     console.log("o amra rosia bondhu ra ...tumi kno komorer bicha hoil na ...");
//     console.log("..");
//     console.log("..");
//     console.log("..");
//     console.log("..");
//     console.log("..");
//     console.log("..");
//     console.log('Ami tomake niye ghurte jabo....tao abra thailand');
// }

// var propose=sayLoveYou;
// var targetedGirls=['sokina', 'jorina', 'mariya', 'bina','lubina'];
// console.log(targetedGirls);
// console.log(targetedGirls[0]);
// sayLoveYou();



// function doubleIt(num){
//     var result=num*2;
//     return result;
// }
// var first=doubleIt(100);
// var second=doubleIt(500);
// console.log(first+second);


// let boolean1=true;
// let falseValue='';
// console.log(typeof(falseValue));

// if(falseValue){
//     console.log("Hello world");
// }
// else{
//     console.log("Hello Jupiter");
// }


// const _1='amit';
// console.log(typeof(_1));
// const __2="amit";
// console.log(typeof(__2));




// let date=new Date();

// console.log(date.getDay());


let currentDay=new Date().getDay();

console.log("your date number is: " +currentDay);

// if(currentDay==0){
//     console.log('Sunday');
// }else if(currentDay==1){
//     console.log('Monday');
// }else if(currentDay==2){
//     console.log('Tuesday');
// }else if(currentDay==3){
//     console.log('Wednesday')
// }else if(currentDay==4){
//     console.log('Thursday')
// }else if(currentDay==5){
//     console.log('Friday');
// }else if(currentDay==6){
//     console.log('Saturday');
// }else{
//     console.log('Please Enter a Valid Date');
// }

switch(currentDay){
    case 0:
        console.log('Sunday');
        break;

    case 1:
        console.log('Monday');  
        break;

    case 2:
        console.log('Tuesday');
        break;   

    case 3: 
        console.log('Wednesday');
        break;
        
    case 4: 
        console.log('Thursday');
        break;
        
    case 5:
        console.log('Friday');
        break;
        
    case 6: 
        console.log('Saturday');
        break;
        
    default:
        console.log('Please enter a valid number');    
}
