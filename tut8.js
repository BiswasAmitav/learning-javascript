console.log('Milon da has reached to our Home ');

let element = document.createElement('li');
element.innerText='this is the first list which is created by Amitav .';
element.className='first-element';
element.id='li1';
element.setAttribute('title','mytitle');
let ul=document.querySelector('ul.list-1');
ul.appendChild(element);
console.log(ul);
console.log(element);

let eleme2=documen.createElement('h3');
eleme2.id='eleme2';
eleme2.className='eleme';
let tnode=document.createTextNode('This is the created Node for eleme2');

eleme2.appendChild(tnode);

element.replaceWith(eleme2);