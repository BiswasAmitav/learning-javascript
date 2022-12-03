let re;
let str;

//Literal Character...
re=/hello/;
re=/hello/i;
re=/hell/i;
re=/lo w/i;
re=/low/i;


// Meta Character....
re=/^hello/i;//Must start with 'hello' ...otherwise it'll not work..
re=/hello$/;//Must end with 'hello'
re=/^hello$/i;//Must start and end with hello
re=/^h.llo$/ //matches any one characters....
re=/h*llo/ //0 or more times ...it can be many and empty as well. 
re=/he?llo/;//Optional.. only e can have and otherwise nothing...
//This can be used for multiple time also....like 
re=/he?a?llo/;//Optional.. only e and a anyone can have and otherwise nothing...

str="Hello World";
str="hillo";//its provide output hillo after h any character can considered..
str="hllo";//Here we dont get..bcz it doesn't matches....
str="h llo";//It'll also consider bcz spaces is an one kind of character.. 

console.log(re.exec(str));

reTest(re,str);
function reTest(re,str){
    if(re.test(str)){
        console.log(`'${str}' matches '${re.source}'`);
    }else{
        console.log(`'${str} doesn't match '${re.source}'`);
    }
}