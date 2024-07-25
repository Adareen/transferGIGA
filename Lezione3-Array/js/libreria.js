let libreria= ["il piccolo principe", "harry potter", "showtime", "java for dummies"]
let costoLibri=[8, 22, 15, 50]; 
let totale=0;




// let elencolibri è una comodità si può chiamare anche pipppo
let elencoLibri= document.getElementById("elencoLibri");

// console.log("\n\n");
for(let i=0; i<libreria.length; i++)
{
    
    elencoLibri.innerHTML += "<li>" + libreria[i]+"  \t" + costoLibri[i]+"$" + "</li>"; 
    totale += costoLibri[i];
}

let totaleLibri=document.getElementById("totaleLibri");
totaleLibri.innerHTML= " TOTALE = " + totale;

