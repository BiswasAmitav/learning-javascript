//CHARACTER SET USING BRACKET....
re=/h[eai]llo/;//Must be one of them inside brackets...
re=/[^ha]ello/;//Anything except those inside brackets....
re=/^[ha]ello/;//ust start with h or a character ....
re=/[a-f]ello/;
re=/^[A-Z]///First letter must be upper Case...
re=/[A-Za-z]/;// Can be any Character.. upper case A to Z and lower case a to z. 
re=/[0-9]ello/;// with a digit and range is already given .
re=/^[0-9]ello/;// Start with a digit and range is already given
re=/[^0-9]ello/;//Can't start with a digit.
re=/[0-9][0-9]ello/;//It check two digit .


str="heillo";
str="hello";
str="fello";
str="amitav";
str="helllo";
str="Hello";
str="Again 1ello";
str="26ello";

console.log(re.exec(str));

reTest(re,str);
function reTest(re,str){
    if(re.test(str)){
        console.log(`'${str}' matches '${re.source}'`);
    }else{
        console.log(`'${str} doesn't match '${re.source}'`);
    }
}