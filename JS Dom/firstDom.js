document.getElementById('first').style.color='red';
var font=document.getElementById('second');
font.style.color='green';
font.style.fontFamily='verdana';
font.style.fontSize='2.5rem';


//JS FOR DESIGNING PART AND HW TO PICK MULTIPLE ELEMENT.........
var authors=document.getElementsByClassName('author');
console.log(authors);
for(var i=0;i<authors.length;i++){
    var element=authors[i];
    element.style.backgroundColor='purple';
    element.style.color='white';
    console.log(element);
    console.log(element.innerHTML);
    element.innerHTML="lekhoker dol -"+(i+1);
    console.log(element.innerHTML);
}


//HERE I PRACTICE FOR QUERY SELECTOR....AND QUERY SELECTORALL


var query=document.querySelector('.first h3');
query.innerHTML="This is been changed by query selector";

console.log(query);

//THIS THE USE CASE OF QUERY SELECTORALL...
document.body.style.backgroundColor='tomato';
var queryAll=document.querySelectorAll('.first h3');
console.log(queryAll);

for(var i=0;i<queryAll.length;i++){
    var allH3=queryAll[i];
    // console.log(allH3);
    allH3.style.backgroundColor='yellow';
    allH3.style.color='black';
    allH3.style.textAlign='center'
    allH3.innerHTML="this is changed by amit through query selectorAll";
    console.log(allH3);
}

//MOUSE HOVER BY USING JAVASCRIPT...

var hover=document.querySelector('h3').setAttribute('title','You are the fist title');;
console.log(hover);

//NOW IN THIS CODE , I LEARNT HOW TO ADD TEXT INSIDE PARAGRAP..

var add=document.getElementById('add');
const newParagraph=document.createElement('p');
newParagraph.innerHTML=' this is added by javascript';
add.appendChild(newParagraph);


//HOW TO ADD LIST ITEM BY USING JAVASCRIPT...

const ul=document.getElementById('gift-list');
const newLi=document.createElement('li');
newLi=innerHTML='hello i am gift 6 added by javascript';
ul.appendChild(newLi);

console.log("amitav");

console.log("protap");

console.log("abir");

console.log("sohag & sajib");
 console.log("baba");
 console.log("ma");
 