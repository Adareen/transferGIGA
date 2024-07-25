// metodi per stringhe

let paragrafo= "questa è la nostra terza lezione di js"

console.log(paragrafo);
console.log("paragrafo consiste di "+ paragrafo.length+" caratteri");


console.log("primo carattere è: "+ paragrafo.charAt(0));
console.log("ultimo carattere è: "+ paragrafo.charAt(paragrafo.length-1));  


// metodi di ricerca
let search1=paragrafo.indexOf("a"); // restituisce la prima occorrenza 
console.log(search1);// posizione del carattere

console.log(paragrafo.lastIndexOf("a"));
console.log(paragrafo.indexOf("terza"));    

// cerco una parola inesistente
let search2=paragrafo.indexOf("dario");
console.log(search2); // restituisce -1 in quanto risorsa non trovata 

if (paragrafo.indexOf("dario")== -1 )
{
    console.log("pattern o parola non esiste"); 
    
}
else console.log("parola cercata esiste  " + paragrafo.indexOf("dario"));

// funzionano anche sugli array 
let mioArray = ["ciao", "come", "stai"];
console.log(mioArray.indexOf("come"));



// metodi per il taglio 
let paragrafo2= "a breve faremo un'esercitazione sugli array";
console.log(paragrafo2.slice(10,30)); // estrae quello che si trova tra indici di inizio e fine

console.log(paragrafo2.substring(10,30));// funzionamento differente 

console.log(paragrafo2.split(" ")); // taglia ad ogni spazio ed inserisce tutto in array 



// metodi di sostituzione
console.log(paragrafo2.replace("faremo", "svolgeremo"));

//inclusione 
console.log(paragrafo2.includes("array"));

// upper and lowercase
console.log(paragrafo2.toUpperCase());