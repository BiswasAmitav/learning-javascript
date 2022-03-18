// console.log("Hello amit");


//SOME BASIC MATH FUNCTION....
var num = 2.38293;
var result = Math.floor(num);
var result2 = Math.ceil(num);
//console.log(result2)
//console.log(result);

var num2 = 3.85;
result2 = Math.round(num2);
//console.log(result2);


var num3 = 2.499;
var result3 = Math.round(num3);
// console.log(result3);



//THIS IS THE FUNCTION FOR GENERATING THE RANDOM NUMBER....

for (var i = 0; i < 5; i++) {
    var randomNumber = Math.random() * 10;
    let output = Math.round(randomNumber);
    console.log(output);
}