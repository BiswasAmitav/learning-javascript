// PROMISS CAN BE USED ALTERNATE OF CALLBACK FUNCTIONS. 
//PROMISS IS A SUCH FEATURES WON CAN WORK MORE SMARTLY THAT CALLBACK OR AS ALTERNATIVE OF CALLBACK
//IT USE .then()...
let persons=[
    {firstName:"Simanta", lastName:"Paul"},
    {firstName:"Fazle",lastName:"Rahat"}
]

function createPerson(person){
    let prom=new Promise(function(resolve, reject){
        persons.push(person);
        let error=true;
        if(!error){
            resolve();
        }else{
            reject('Error something wrong...');
        }
    });
    return prom;
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

createPerson({firstName:"Amitav",lastName:"Biswas"})
    .then(getPerson)
    .catch(function(err) {
        console.log(err);
    })