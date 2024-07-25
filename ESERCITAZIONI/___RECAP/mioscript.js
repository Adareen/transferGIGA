let variabile; // assume qualsiasi valore. debolmente tipizzato
let stringa="ciao"; //stringa di testo gode di tutte le proprietà delle stringhe
let char='c'; // carattere o stringa lui non fa differenza
let array=[2,3,4,5]; // questo è un array
let arrayStringa=["prova", "uno", "due"]; // questo è ancora un array


console.log("scrive nella console"); // posso passare funzioni/metodi 
console.log(paragrafo.indexOf(2)); // esempio

let num1=Number(window.prompt("prendin numero")); // cala il prompt sul web ed attende input
// si usa Number perché tutto quello che viene digitato viene recepito come stringa, quindi faccio il cast a number


// per scrivere in html
let elElementoHTML=document.getElementById("elElementoHTML") // ricavo l'ul
elElementoHTML.innerHTML=risultati; // inietto il risultato nell'innerhtml


arrayStringa.push("nuovo_elemento"); // aggiunge un nuovo elemetno alla collezione
arrayStringa.pop() // rimuove ultimo elemento
arrayStringa.reverse(); // inverse ordine
arrayStringa.split(",");


// funzioni
(function (num1, num2){
    let somma=Number(num1)+Number(num2);
    return somma;
}())

// esempio di funzione che prende in ingresso due variabili e scrive in console ciao nome e cognome inseriti
function salutami(nome, cognome){
    console.log(`Ciao ${nome} ${cognome}!`);

}
// ricorda di fare funzioni piccole e con un determinato scopo, se deve unire due stringhe, deve fare solo quello e basta.
// se deve stampare roba, fai una funzione solo per la stampa. scopo preciso





// arrow function
let somma= (num1,num2)=> {
    return num1+num2;
}

let colori=["giallo", "rosso", "blu"];
colori.forEach(colore => {
    console.log(colore);
});

let nomi=["anna", "jason", "franco"];
function stampaPowerRangers(nome){
    return `il nome del power ranger è: ${nome}`; // backtick su mac si fa ` con (option + 9)= ` 
}