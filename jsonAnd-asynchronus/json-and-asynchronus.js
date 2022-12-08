//INTRODUCING JSON SYNTAX

//BEFORE UNDERSTANDING JSON SYNTAX FIRST WE SHOULD AWARE OF JS OBJECT....

var student = {
    name: "Rahim",
    age:26,
    homeTown:"Bangladesh"
}

var student_json={
    "name":"Rahim",
    "age":26,
    "homeTown":"Bangladesh"
}

//CONVERTING OBJECT TO JSON..
var object_to_json=JSON.stringify(student);
console.log(object_to_json);

//CONVERTING JSON TO OBJECT..
var json_to_object=JSON.parse(object_to_json);
console.log(json_to_object);
