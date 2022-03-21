// // console.log('We are learning javascript...');

// // const name='Babamaa';
// // const greeting='Good Morning';
// // console.log(greeting +' '+name)

// // let html;
// // html="<h1>This is the First heading</h1>"+"<p>This is my Paragraph</p>";
// // html=html.concat('this','str2');
// // console.log(html);
// // console.log(html.length)
// // console.log(html.toUpperCase())
// // console.log(html);
// var text="amit";
// // for(var i=0;i<5;i++){
// //     finalText=text+i;
// //     console.log(finalText)
// // }


// // function repeatStr(n,str){
// //     // var string="";
// //     // for(var i;i<5;i++){
// //     //     string=string+str;
// //     // }
// //     // return string;

// //     var time=n;
// //     text=str;
// //     console.log(text.repeat(n));
// // }
// // var text=repeatStr(4,"*");


// var num=1700;
//  var result=num/100;
// console.log(result);
// console.log(typeof(result))



//DNA TO RNA..

function dnaToRna(dna){
    var Dna=dna;
    if(Dna.indexOf(T)!=-1){
        var Rna=Dna.indexOf(T);
        Rna="U"
        console.log(Rna);
    }
    // for(var i=0;i<dna.length;i++){
    //     var result=dna[i];
    //     emptyDna=emptyDna+result;
    //     console.log(emptyDna)
    // }
}
var Dna=dnaToRna("CGHT");
console.log(dna);
