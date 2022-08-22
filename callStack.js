//By this code i'll learn how to call function by following stack wise..
//and thats call execution constext....


function add(a,b){
    console.log("I am add..");
    return a+b;
}

function multiply(x){
    console.log("I am multiple..");
    return x=add(10,20);
}

function divide(y){
    console.log("i am divide ");
    return multiply(2)/y;
}

console.log(divide(5));

