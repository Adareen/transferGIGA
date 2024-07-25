// ARRAY SONO DICHIARATI CON PARENTESI QUADRE, sono una collezione di elementi simili

let colori = ["rosso","verde", "blu", "rosso", "rosa", "azzurro"];

// sono zero based, come in c. array partono da zero

// recupero il colore

let primoColore=colori[0];
console.log(primoColore);

let secondoColore=colori[1];
console.log(secondoColore);

let sestoColore=colori[5];
console.log(sestoColore);


// voglio conoscere la dimensione dell'Array -> uso proprietà "lenght"

let lunghezza= colori.length;
console.log("dimensione dell'array "+lunghezza);

let coloreInesistente= colori[10];
console.log(coloreInesistente);

let ultimoColore = colori[colori.length-1]; 
// non sapendo la dimensione N-1 ->  
console.log(ultimoColore);



//////// Altro array

let frutta= ["mela", "pesca", "banana", "kiwi", "arance"];

// la parola metodo implice che l'oggetto venga manipolato. la parola proprietà implica che restituisca qualcosa che è una proprietà dell'oggetto, non lo modifica


// push() aggiunge un elemento all'array
frutta.push("ciliegia");
frutta.push("mandarino");

console.log(frutta);

// pop() elimina ultimo elemento dall'array
frutta.pop();
console.log(frutta);

// sort() ordina l'array 
frutta.sort();
console.log(frutta); 

// reverse() ribalta l'ordine 
frutta.reverse(); 
console.log(frutta);


//// UNIRE 2 ARRAY
let verdura= ["broccoli", "cavolfiori", "cime di rapa", "lattuga"];
let fruttaEVerdura= frutta.concat(...colori); // ... three dot -> serve per far capire che l'array ha lo stesso tipo 
console.log(fruttaEVerdura);

// unire gli elementi di un array
let mioNome= ["A","n","d","r","e","a"]; 
console.log(mioNome.join(" - "));

// dividere con split 
let mioCognome= "Cesare"; 
let cognomeArray=mioCognome.split("");
console.log(cognomeArray);

let nomeUser ="dario";
console.log(nomeUser.split("").reverse().join("")); 


// Array misti, NON  SERVE a descrivere entità complesse
let docente= ["dario", "Mennillo", "javascript", 12, true]; 


// per poter leggere un array elemento per elemento uso il ciclo FOR 
frutta.forEach(frutto => {
    console.log(frutto);
});

let listaFrutta= document.getElementById("listaFrutta");

console.log("\n\n");
for(let i=0; i<frutta.length; i++){
    console.log(frutta[i]); 
    listaFrutta.innerHTML += "<li>" + frutta[i] + "</li>"; 

}


