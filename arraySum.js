// var array=[12,13,14,15,16,17,18,19];
// sum=0;
// console.log("Your array is having ",array.length+" element");
// for(var i=0;i<array.length;i++){
//     var arrayElement=array[i];
//     sum=sum+arrayElement;

// }
// console.log("Here is your all array element: ",arrayElement);
// console.log(sum);



// function getArraySum(array) {
//     sum = 0;
//     console.log("Your array is having ", array.length + " element");
//     for (var i = 0; i < array.length; i++) {
//         var arrayElement = array[i];
//         sum = sum + arrayElement;
//     }
//     return sum;
// }

// var array=[12,13,14,15,16,17,18,19];
// var result=getArraySum(array);
// console.log(result);

// for(var i=20;i<30;i++){
//     // console.log(i);
// }
// var array2=i;
// console.log(array2);

// var sum=0;
// for(var i=0;i<5;i++){
//     var element=i;
//     sum=sum+element;
//     console.log(element);
//     console.log(sum);
// }

var summation = function (num) {
    // Code here 
    if(num>0){
      var sum=0;
      for(var i=1;i<num;i++){
        var element=i;
        sum=sum+element;
        console.log(sum)
      }
      console.log(sum);
    }
    return sum;
  }
  
  var firstSum=summation(5);
  console.log(firstSum);

  var summation = function (num) {
    // Code here 
    if(num>0){
  //     var sum=0;
  //     for(var i=0;i<num;i++){
  //       var element=i;
  //       sum=sum+element;
  //     }
  //     console.log(sum);
      sum=num*(num+1)/2;
    }
    else{
      return -1;
    }
    return sum;
  }
  
  var firstSum=summation(5);
  console.log(firstSum);