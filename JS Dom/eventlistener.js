
const grand=document.querySelector('.grand');

const chacha=document.querySelector('.chacha');

const bhai=document.querySelector('.bhai');



// TO START FROM OUTSIDER......



// grand.addEventListener('click',e =>{
//     console.log('I am grand');
// },
// {capture:true}
// );

// chacha.addEventListener('click',e =>{
//     console.log('I am chacha');
// },
// {capture:true}
// );

// bhai.addEventListener('click',e =>{
//     console.log('I am bhai');
// },
// {capture:true}
// );





//TO PRINT AS LIKE BUBBLE....

// grand.addEventListener('click',e =>{
//     console.log('I am grand');
// },
// {capture:false}
// );

// chacha.addEventListener('click',e =>{
//     console.log('I am chacha');
// },
// {capture:false}
// );

// bhai.addEventListener('click',e =>{
//     console.log('I am bhai');
// },
// {capture:false}
// );









//BUT IN THIS METHOD ALL EVENT LISTENER IS CALLING AGAIN AND AGAIN
/*  IF WE WANT EVENT LISTENER FOR A ONE TIM , THEN WE CAN PURIFY OUR 
THIRD OBJECT....ONCE:1;
once: true;
*/

// grand.addEventListener('click',(e)=>{
//     console.log('I am grand');
// },
// {once:true}
// );

// chacha.addEventListener('click',(e)=>{
//     console.log('I am chacha');
// },
// {capture:true}
// );

// bhai.addEventListener('click',(e)=>{
//     console.log('I am bhai');
// },
// {capture:true}
// );







grand.addEventListener('click',say);

setTimeout(function(){
    grand.removeEventListener('click',say);
},
2000);



function say(){
    console.log('I am grand');
};

// chacha.addEventListener('click',e =>{
//     console.log('I am chacha');
// },
// {capture:false}
// );

// bhai.addEventListener('click',e =>{
//     console.log('I am bhai');
// },
// {capture:false}
// );
