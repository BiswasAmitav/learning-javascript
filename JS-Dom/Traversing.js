let val;
//WINDOW AND THIS GIVES THE SAME VALUES IN CONSOLE. 
val=this;
val=window;
//WINDOW.DOCUMENT AND DOCUMENT GIVES YOU THE SAME ANS ...
val=window.document;
val=document;
//DOCUMENT.ALL WILL GIVES YOU ALL ELEMENTS INSIDE INTO AN ARRAY ..
val=document.all;
val=document.all.length;//IT COUNTS ALL ELE AND TAGS TOTALLY . 
//WE CAN SELECT SPECIFIC TAG AS A ELEMENT FROM DOCUMENT...
val=document.head;
val=document.body;
val=document.links;
val=document.doctype;//HTML TYPE WILL SHOW IT ....
val=document.domain;//PORT NUMBER WILL SHOW..
val=document.URL;
val=document.characterSet;
val=document.contentType;//HTML
//HERE IT SHOWS THE FORM COLLECTION ARE AVAILABLE ON PAGE 
val=document.forms[1];//2ND FORM 
val=document.forms[1].method;//FORM METHOD..GET , POST 
console.log(val);

