//DATA TYPES ON JSON AND OBJECT CONVERTING TECHNIQUE..
//links like https://github.com/..
//string
//number
//object(Json, Object)
//array
//boolean
//null


var person={
    //THESE ARE THE MAXIMUM DATA TYPE SUPPORT BY JAVASCRIPT ...
    name:"Rahim",
    age:25,
    homeTown:"Dhaka",
    married:false,
    dob:1995-05-06,
    test_null:null,
    test_undefined:undefined,
    greet:function(){
        console.log(`Hello ${this.name}`);
    }
}
person.greet();

//BUT JSON DON'T SUPPORT ALL DATA LIKE UNDEFINED ,DATE, AND FUNCTION AS WELL..
//LET CHECK..
 var person_objectToJSON = JSON.stringify(person);
 console.log(person_objectToJSON);

 // We cant directly convert json file to object because when we write json object through js It consider as a javascript..



