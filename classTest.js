// var getSum = function(a, b) {
//     return (a ^ b, (a & b) << 1)
//   };
//   var ans=getSum(2,2);
//   console.log(ans);


// var myinputarr = [];
// var size = 5; 
 
// for(var a=0; a<size; a++) 
// {
//     myinputarr[a] = prompt('Enter Element ' + (a+1));
// }

// for (let i = myinputarr.length - 1; i >= 0; i--) {
//     myinputarr.push(myinputarr[i]);
// }
// console.log(myinputarr);


// var str = length('Amitav Biswas');
// while( true ){
//     if( str.charAt( len ) == '' ){
//         break;
//     }else{
//         len++;
//     }
// }
// console.log( len );
// for( var len = 0; len > str.length(); len++ ){
//     if( str.charAt( len ) == '' ){
//         break;
//     }
// }


// const number1 = parseInt(prompt('Enter the wait total capacity of this boat'));
// const number2 = parseInt(prompt('Number of adult passenger: '));
// const number3 = parseInt(prompt('Number of child passenger: '));

// function countAdult(number2){
//     return number2*75;
// }
// function countChild(){
//     return number3*20;
// }

// var totalAdult=countAdult();
// var totalChild=countChild();
// var totalWeight=totalAdult+totalChild;

// if(number1>totalWeight){
//     console.log("The boat will stay...");
// }
// else{
//     console.log("Its overloaded . It may sink....")
// }

// let sum = 0;
// for (let i = 1; i <= number; i++) {
//     sum += i;
// }
// console.log('The sum of natural numbers:', sum);



function check(n, m, x, y,vl)
{
	var temp = m;
	if (vl > n)
		return false;
	var ex = n - vl;
	ex *= y;
	temp += ex;

	var cr = parseInt(temp / x);
	if (cr >= vl)
		return true;
	return false;
}
function maximizeMangoes(n, m, x, y)
{
	var l = 0, r = n;
	var ans = 0;
	while (l <= r) {
		var mid = l + parseInt((r - l) / 2);
		if (check(n, m, x, y, mid)) {
			ans = mid;
			l = mid + 1;
		}
		else
			r = mid - 1;
	}

	return ans;
}
var W = 4, C = 8, x = 4, y = 4;
console.log( maximizeMangoes(W, C, x, y));
