function saluta(){
    console.log("ciao dario");
}


// domanda da coloquio: come posso simulare il js il modificatore private?  Risposta: con le closure! possibilità di dichiarare funzioni anche più innestate, incapsulando così il funzionamento



//evento in js - questa è una via di mezzo 
let btn=document.querySelector("#btn");
btn.onclick=saluta;

//event listener
let btn=document.querySelector("btn2");
//la funzione va richiamata senza parentesi tonde
btn.addEventListener("click", saluta, false);
// elemento false serve per il bubbling -> da vedere 

/* perché usare gli event listner?
    più sicuro, compatibilità con diversi browser,
    acceso a quantità di info molto più ampia!*/

