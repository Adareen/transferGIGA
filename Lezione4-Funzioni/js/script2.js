function calcolaArea(){
    let base=10;
    let altezza=7;
    let area=base*altezza;
    return area;

}

console.log(calcolaArea());

let valoreArea=calcolaArea();
console.log("valore calcolato con valoreArea "+valoreArea);


// vogliamo passare dei parametri alla mia funzione
function calcolaSuperficie(base, altezza){
    let area=base*altezza;
    return area;
}

let valoreSuperficie=calcolaSuperficie(8,6);
console.log(valoreSuperficie);

function salutami(nome, cognome){
    console.log(`Ciao ${nome} ${cognome}!`);

}


salutami("dario", "mennillo");