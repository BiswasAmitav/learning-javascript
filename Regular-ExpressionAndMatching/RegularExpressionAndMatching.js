//REGULAR EXPRESSION...
//PATTERN MATCHING...

let re;
re = /hello/;
re=/Hello/;
re=/hello/i;//its consider as both which is not case sensitive..it counts both either hello & Hello
console.log(re);//IT SHOWS HOLE REGULAR EXPRESSION LIKE /hello/....
console.log(re.source);//IT SHOWS ONLY HELLO ....

//SOME FUNCTIONS HOW REGULAR EXPRESSION WORKS...
str = "Hello world";
str="Again Hello world"
str="Hell World";
str="sdHello World";//on index no 2 it found hello..
str="sdHello Hello World";//Its multiple patterns found it'll only consider first pattern
//exec() - returns a result in an array or null..
let result=re.exec(str);
// console.log(result);


//test() - it return true/false..
result=re.test(str);//It'll returns true bcz "Hello" word matches found..

//match() - Returns array or null...
str="Again Hello World Hello.."
result=str.match(re)

//search() - Return index of the first match or -1
str="World";//It return -1 bcz can't match with World 
result=str.search(re);
console.log(result);

// replace() - It replace the targeted world index and gives a new array ..
str="Again Hello World Hello . . ";
let nesStr=str.replace(re,"Hi");//It give output as "Again Hi World Hello";



//