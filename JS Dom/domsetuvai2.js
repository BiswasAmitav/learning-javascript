// const text = document.querySelector('.title');
// console.log(text.innerHTML);
// text.style.color = 'green';
// console.log(text.textContent);


// const clickBtn = document.querySelector('.click');

// clickBtn.addEventListener('click', function () {
//     text.innerHTML = 'Hello Amitav Your text is successfully changed... Thank your'
//     text.style.color = 'orange'
// });

const inputs=document.querySelectorAll('input');

const result=document.querySelector('span');

const form=document.querySelector('form');


// result.innerText=inputs[0].value;


form.addEventListener('submit',function (e){
    e.preventDefault();
    result.innerText=inputs[0].value;
    result.style.color=inputs[3].value;
});

