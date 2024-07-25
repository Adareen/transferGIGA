/**
 * @param {String} titolo
 * @param {String} copertina
 * @param {String} autore
 * @param {String} trama
 * @param {String[]} personaggi
 * @param {Number} prezzo
 */
class Libro {
  constructor(titolo, copertina, autore, trama, personaggi, prezzo) {
    this.titolo = titolo;
    this.copertina = copertina;
    this.autore = autore;
    this.trama = trama;
    this.personaggi = personaggi;
    this.prezzo = prezzo;
  }
}

let libri = [
  new Libro(
    "Harry Potter",
    "https://m.media-amazon.com/images/I/718kKmxQBWL._AC_UF1000,1000_QL80_.jpg",
    "J.K. Rowling",
    "Un maghetto che fa le magie",
    ["Harry Potter", "Ron Weasley", "Hermione Granger"],
    21
  ),
  new Libro(
    "Il Mondo Al contrario",
    "https://m.media-amazon.com/images/I/61VfPKjuuPL._SY466_.jpg",
    "Roberto Vannacci",
    "“Il Mondo al contrario” vuole infatti provocatoriamente rappresentare lo stato d’animo di tutti quelli che, come me, percepiscono negli accadimenti di tutti i giorni una dissonante e fastidiosa tendenza generale che si discosta ampiamente da quello che percepiamo come sentire comune, come logica e razionalità",
    ["Gli italiani stupidi", "Quello scemo di Vannacci"],
    19.76
  ),
  new Libro(
    "Io sono Giorgia. Le mie radici le mie idee",
    "https://m.media-amazon.com/images/I/710MUrNAofL._SL1500_.jpg",
    "Giorgia Meloni",
    "In questo libro, Giorgia Meloni parla per la prima volta di sé a tutto tondo.",
    ["Giorgia Meloni", "Il signora Presidente"],
    17.1
  ),
  new Libro(
    "Perché Salvini Merita Fiducia Rispetto E Ammirazione",
    "https://m.media-amazon.com/images/I/6175fdtYd6L._SL1360_.jpg",
    "Alex Green",
    "Questo libro è pieno di pagine vuote. Nonostante anni di ricerche, non abbiamo potuto trovare niente da dire su questo argomento, così per favore sentitevi liberi di usare questo libro per gli appunti.",
    ["Matteo Salvini"],
    6.99
  ),
  new Libro(
    "Quiz da fare mentre fai la cacca",
    "https://m.media-amazon.com/images/I/613d1GISrkL._SL1000_.jpg",
    "Nathan Haselbauer",
    "Confrontati con una delle menti più geniali al mondo in una sfida a colpi di indovinelli! Questo libro contiene 201 quiz, da affrontare senza alcun bisogno di carta e penna e pensati per poter essere risolti in non più di due minuti",
    ["Stitici"],
    5.99
  ),
];

let elTitolo = document.querySelector("#elTitolo");
let elCopertina = document.querySelector("#elCopertina");
let elAutore = document.querySelector("#elAutore");
let elTrama = document.querySelector("#elTrama");
let elPrezzo = document.querySelector("#elPrezzo");
let elPersonaggi = document.querySelector("#elPersonaggi");

let i = 0;
function mostraLibro(indice) {
  elTitolo.textContent = libri[indice].titolo;
  elCopertina.setAttribute("src", libri[indice].copertina);
  elAutore.textContent = libri[indice].autore;
  elTrama.textContent = libri[indice].trama;
  elPrezzo.textContent = libri[indice].prezzo + " €";
  elPersonaggi.textContent = "";

  libri[indice].personaggi.forEach((pers) => {
    let li = document.createElement("li");
    li.textContent = pers;
    elPersonaggi.appendChild(li);
  });
}
mostraLibro(i);

let btnAvanti = document.querySelector("#btnAvanti");
let btnIndietro = document.querySelector("#btnIndietro");

function avanti() {
  if (i < libri.length - 1) {
    i++;
  } else {
    i = 0;
  }
  mostraLibro(i);
}
function indietro() {
  if (i == 0) {
    i = libri.length - 1;
  } else {
    i--;
  }
  mostraLibro(i);
}

btnAvanti.onclick = avanti;
btnIndietro.onclick = indietro;
let titolo = document.querySelector("#titolo").value;
let copertina = document.querySelector("#copertina").value;
let btnAddLibro = document.querySelector("#btnAddLibro");
let arrPersonaggi = [];
btnAddLibro.addEventListener("click", function () {
  let l = new Libro(
    document.querySelector("#titolo").value,
    document.querySelector("#copertina").value,
    document.querySelector("#autore").value,
    document.querySelector("#trama").value,
    arrPersonaggi,
    document.querySelector("#prezzo").value
  );

  arrPersonaggi = [];
  console.log("libro creato");
  libri.push(l);
  console.log("libro pushato");
  event.preventDefault();
});

btnPers = document.querySelector("#btnPers");

btnPers.addEventListener("click", function () {
  arrPersonaggi += document.querySelector("#personaggi").value;
});
