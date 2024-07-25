let nome=window.prompt("nome");
let cognome=window.prompt("cognome?");
let dob=Number(window.prompt("anno di nascita"));
let age=2023-dob;

console.log(nome);
console.log(cognome);
console.log(age);

let elDati=document.getElementById("dati");
let Dati= "Benvenuto" + nome + cognome+" <br> quest'anno compi: " + age + " <br> anni";

let a=3;
let b=4;
let c=5;



let somma=a+b+c;
console.log(somma);

let elSomma=document.getElementById("somma1");
let risultato="la somma dei 3 numeri è:" + somma;

elDati.innerHTML=Dati;
elSomma.innerHTML=risultato;