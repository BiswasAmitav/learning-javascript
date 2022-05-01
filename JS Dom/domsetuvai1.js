// const paraWithID=document.getElementById('Id');
// console.log(paraWithID);



// const allparaWithClass=document.getElementsByTagName('p');
// console.log(allparaWithClass);



// paraWithID.style.backgroundColor='red';
// allparaWithClass[0].style.backgroundColor='green';
// allparaWithClass.style.color='white';



// const allparaWithClass=document.querySelectorAll('.para');
// console.log(allparaWithClass);
// allparaWithClass.forEach(function (el) {
//     el.style.color='white';
//     el.style.backgroundColor='black';
// });



//  NODE LIST IS AN ARRAY LIKE ......




//COLOR BUTTON WITH TRIGGER....



const titles = document.querySelectorAll('.title');
const btn = document.querySelectorAll('.button');


const defaultBtn= document.querySelectorAll('.default');

console.log(defaultBtn);
btn[0].addEventListener('click', function () {
    titles.forEach(function (el) {
        el.style.color = 'black';
        el.style.border='none';
        // el.style.padding='5px';
        el.style.transition='0.4s';
    });
});


btn[1].addEventListener('click', function () {
    titles.forEach(function (el) {
        el.style.color = 'green';
        el.style.border='2px solid green';
        el.style.padding='5px';
        el.style.transition='0.4s';
    });
});

btn[2].addEventListener('click', function () {
    titles.forEach(function (el) {
        el.style.color = '#FFD700';
        el.style.border='2px solid #FFD700';
        el.style.padding='5px';
        el.style.transition='0.4s';
    });
});


btn[3].addEventListener('click', function () {
    titles.forEach(function (el) {
        el.style.color = 'orange';
        el.style.border='2px solid orange';
        el.style.padding='5px';
        el.style.transition='0.4s';
    });
});

btn[4].addEventListener('click', function () {
    titles.forEach(function (el) {
        el.style.color = '#8B00B';
        el.style.border='2px solid #8B00B';
        el.style.padding='5px';
        el.style.transition='0.4s';
    });
});


btn[5].addEventListener('click', function () {
    titles.forEach(function (el) {
        el.style.color = 'grey';
        el.style.border='2px solid grey';
        el.style.padding='5px';
        el.style.transition='0.4s';
    });
});



btn[6].addEventListener('click', function () {
    titles.forEach(function (el) {
        el.style.color = '#9932CC';
        el.style.border='2px solid #9932CC';
        el.style.padding='5px';
        el.style.transition='0.4s';
    });
});


btn[7].addEventListener('click', function () {
    titles.forEach(function (el) {
        el.style.color = '#8A2BE2';
        el.style.border='2px solid #8A2BE2';
        el.style.padding='5px';
        el.style.transition='0.4s';
    });
});


btn[8].addEventListener('click', function () {
    titles.forEach(function (el) {
        el.style.color = '#A52A2A';
        el.style.border='2px solid #A52A2A';
        el.style.padding='5px';
        el.style.transition='0.4s';
    });
});



btn[9].addEventListener('click', function () {
    titles.forEach(function (el) {
        el.style.color = '#7FFF00';
        el.style.border='2px solid #7FFF00';
        el.style.padding='5px';
        el.style.transition='0.4s';
    });
});


btn[10].addEventListener('click', function () {
    titles.forEach(function (el) {
        el.style.color = '#DC143C';
        el.style.border='2px solid #DC143C';
        el.style.padding='5px';
        el.style.transition='0.4s';
    });
});


// defaultBtn[0].addEventListener('click', function () {
//     defaultBtn.forEach(function (el) {
//         el.style.color='black';
//     });
//   });
  