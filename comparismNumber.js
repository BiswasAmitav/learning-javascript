// var business=450;
// var minitster=350;
// var sochib=550;


// var max=Math.max(business,minitster,sochib);
// console.log(max);

// if(business>minitster){
   
//     if(business>sochib){
//         console.log("Business is bigger");
//     }
//     else{
//         console.log("Sochib is bigger");
//     }
// }
// else{
//     if(minitster>sochib){
//         console.log("Minister is bigger");
//     }
//     else{
//         console.log("Sochib is bigger");
//     }
// }

//TO FIND THE MAX VALUE IN ARRAY

var marks=[45,34,23,89,23,67,12,45,54,63,71,16,38];
var max = marks[0];

for(var i = 0; i < marks.length;i++){
    var element=marks[i];
    //TO PRINT ALL ELEMENTS ON ARRAY......

    console.log(element)
    if(element>max){
        max=element;
        // console.log(max);
    }


    // else{
    //     console.log();
    // }
    
}
console.log("Highest value is : ",max);