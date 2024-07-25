/**
 * @param {Stringa} descrizione
 * @param {Number} scadenza
 */
function item(descrizione, scadenza) {
  this.descrizione = descrizione;
  this.scadenza = scadenza;
}

// recupero pezzi attraverso queryselector
let btnAdd = document.querySelector("#btnAdd");
let card = document.querySelector("#card");

// aggiungi item 
function addItem(){
  let nuovoItem=new Item(document.querySelector("#elDescrizione").value,
  document.querySelector("#elScadenza").value);
  listaItems.push(nuovoItem);

  // sorting 
  listaItems.sort(nuovoItem);


  card.innerHTML="";
  listaItems.forEach(item => {
      card.innerHTML+= `<li> ${item.descrzione} - scade tra: ${item.scadenza} giorni </li>`;
  });

  
}
btnAdd.onclick = addItem;

