var a=5;
var b=7;
console.log("before wap: a =", a, "b=", b);

var temp=a;
a=b;
b=temp;
console.log("After swap: a =", a, "b = ",b );



// By another method
var x=5;
var y=10;
console.log("Before swap : x = ",x,",", "y = ",y,".");
x=x+y;
y=x-y;
x=x-y;
console.log("After swap : x = ",x,",","y = ", y,".");


// By another method which is used by Javascript
var p=10;
var q=20;
console.log("Before swap : p = ",p,",","q = ", q,".");
[p, q] = [q, p];
console.log("After swap : p = ",p,",","q = ", q,".");
