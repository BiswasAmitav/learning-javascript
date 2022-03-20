var array=[2, 2, 3, 5, 6, 7];
var uniqueName=[];
for(var i=0; i<array.length; i++){
    var element=array[i];
    var index=uniqueName.indexOf(element);
    if(index == -1){
        uniqueName.push(element);
    }
}
console.log(uniqueName);