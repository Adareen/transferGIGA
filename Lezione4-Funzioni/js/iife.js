// funzioni anonime
// IIFE - funzioni autoinvocanti

(function (num1, num2){
    let somma=Number(num1)+Number(num2);
    return somma;
}())

// arrow 
let somma= (num1,num2)=> {
    return num1+num2;
}

console.log(somma(5,4));
// variabile funzionale, serve a poco a meno che non si guardi al lato ottimizzazione 


// for each
 
let colori=["giallo", "rosso", "blu"];
colori.forEach(colore => {
    console.log(colore);
});

let nomi=["anna", "jason", "franco"];
function stampaPowerRangers(nome){
    return `il nome del power ranger è: ${nome}`;
}

nomi.forEach(nome => {
    console.log(stampaPowerRangers(nome));
});