// notazione letterale con javascript
let studente={
    nome: "anna",
    cognome :"rossi", 
    matricola: 1,
    email:"anna.rossi@gmail.com", 
    presenza:true
}

// posso creare al volo in js uno studente (oggetto) dal nullo, perché js non è basato sulle classi ma sui prototipi

console.log(typeof studente);
console.log(studente.nome);

let studenteJSON='{"nome": "anna", "cognome":"rossi","matricola":1, "email": "anna.rossi@gmail.com", "presenza":true}';
console.log(typeof studenteJSON ); // string 

// il json è una stringa sostanzialmente 

// --------------------------------------------------------------------------------------------------------------

class Docente {
    constructor(nome, cognome, materia) {
        this.nome = nome;   
        this.cognome = cognome;
        this.materia = materia;
    }
}

let docente=new Docente("dario", "mennillo", "js");
console.log(typeof docente, "questo è il docente ");

// traduo oggetto in un json

let docenteJSON=JSON.stringify(docente);

console.log("questo è il docente JSON", docenteJSON);

//////////////////

let respoCorsoJSON='{"nome":"egle","cognome":"risola"}';
// traduco la stringa in oggetto
let respoCorso=JSON.parse(respoCorsoJSON); // fa diventare un json in oggetto 
console.log("respo", respoCorso);