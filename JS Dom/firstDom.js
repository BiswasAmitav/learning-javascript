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
