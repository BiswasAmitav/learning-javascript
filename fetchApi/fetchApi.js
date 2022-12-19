// HOW WE CAN MAKE SYNCHRONUS WAY TO ASYNCHRONUS USING CALLBACK FUNCITON ...

// setTimeout(function(){
//     console.log();
// },5000);


let persons=[
    {firstName:"Simanta", lastName:"Paul"},
    {firstName:"Fazle",lastName:"Rahat"}
]

function createPerson(person,callback){
    setTimeout(function(){
        persons.push(person);
        console.log(persons);
        callback();
    },3000)
}

function getPerson(){
    setTimeout(function(){
        let output= '';
        persons.forEach(function(person){
            output += `<li>${person.firstName} ${person.lastName}</li>`;
        });
        document.getElementById('output').innerHTML=output;
        console.log(output);
    },6000); 
}

createPerson({firstName:"Amitav",lastName:"Biswas"},getPerson);

