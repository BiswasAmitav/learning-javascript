function resverseString(str){
    var reverse ="";
    for(var i=0;i<str.length;i++){
        var char = str[i];
        reverse=char+reverse;
    }
}
var statement="Amitav and Noushad vai";
var forReverse=resverseString(statement);