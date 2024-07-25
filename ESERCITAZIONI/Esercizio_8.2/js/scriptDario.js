let elDesc=document.querySelector("#elDescrizione");
let elScad=document.querySelector("#elScad");
let btnAdd=document.querySelector("#btnAdd");
let card=document.querySelector("#card");

// js è prototype based, class non è una struttura di base 
class Item {
    constructor(descrizione, scadenza) {
        this.descrizione = descrizione;
        this.scadenza = scadenza;
    }
}

let listaItems=[];


function addItem(){
    let nuovoItem=new Item(document.querySelector("#elDescrizione").value,
    document.querySelector("#elScadenza").value);
    listaItems.push(nuovoItem);

    // sorting 
    listaItems.sort(nuovoItem)


    card.innerHTML="";
    listaItems.forEach(item => {
        card.innerHTML+= `<li> ${item.descrzione} - scade tra: ${item.scadenza} giorni </li>`;
    });

    
}

btnAdd.addEventListener("click", addItem) // terzo parametro è il bubbling 

elScad.addEventListener("keypress", function(event){
   
    if(event.key=="Enter")
    {
        btnAdd.click();
    }
});

// closure sono funzione annidate, serve per accedere agli stati. la funzione più interna accede agli stati più interni -> permette di implementare l'incapsulamento

// function stampaItems(){
//     let mioParam=10;
//     function passaParamentro(){
//         return (mioParam*2);
//     }
//     return passaParamentro();
// }
