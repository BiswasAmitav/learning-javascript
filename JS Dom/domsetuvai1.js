


// const paraWithID=document.getElementById('Id');
// console.log(paraWithID);



// const allparaWithClass=document.getElementsByTagName('p');
// console.log(allparaWithClass);



// paraWithID.style.backgroundColor='red';
// allparaWithClass[0].style.backgroundColor='green';
// allparaWithClass.style.color='white';



const allparaWithClass=document.querySelectorAll('.para');
console.log(allparaWithClass);
allparaWithClass.forEach(function (el) {
    el.style.color='white';
    el.style.backgroundColor='black';
});











