let cart = document.querySelector("#cart");
let table = document.querySelector("#table");

let select = document.querySelector(".select");

let tot = 0;

let nOrdine = 1;
window.addEventListener("DOMContentLoaded", function () {
  if (this.localStorage.length != 0) {
    let viaggiPrenotati = JSON.parse(this.localStorage.getItem("etichetta"));
    console.log(viaggiPrenotati);

    let table = document.querySelector("#table");

    for (let i = 0; i < viaggiPrenotati.length; i++) {
      let tr = document.createElement("tr");
      let th = document.createElement("th"); // id
      let td1 = document.createElement("td"); // tratta
      let td2 = document.createElement("td"); //costo
      let td3 = document.createElement("td"); //mezzo
      let td4 = document.createElement("td"); //durata
      let td5 = document.createElement("td");
      let btn = document.createElement("button"); //pulsante per eliminare

      th.setAttribute("scope", "col");
      td1.setAttribute("scope", "col");
      td2.setAttribute("scope", "col");
      td3.setAttribute("scope", "col");
      td4.setAttribute("scope", "col");
      btn.setAttribute("class", "btn btn-outline-primary");
      btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        //     <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
        //     <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
        //   </svg>`;

      th.textContent = `${nOrdine++}`;
      td1.textContent = `${viaggiPrenotati[i].tratta}`;
      td2.textContent = `${viaggiPrenotati[i].costo}`;
      td3.textContent = `${viaggiPrenotati[i].mezzo}`;
      td4.textContent = `${viaggiPrenotati[i].durata}`;

      td5.appendChild(btn);

      tr.append(th, td1, td2, td3, td4, td5);

      table.append(tr);

      //rimuovo dalla local storage
      btn.addEventListener("click", function () {
        let viaggiLocalStorage = localStorage.getItem("etichetta");
        //console.log("sono i vaiggi dalla local storage"+viaggiLocalStorage); funziona

        let arrayViaggi = JSON.parse(viaggiLocalStorage);
        console.log(arrayViaggi);

        //let index = viaggiPrenotati.indexOf(i);
        // rimuovo dalla local storage
        viaggiPrenotati.splice(i, 1);
        localStorage.setItem("etichetta", JSON.stringify(viaggiPrenotati));
        console.log("cancello " + viaggiPrenotati.length);
        console.log(viaggiPrenotati);
        location.reload();

        // let index = viaggiPrenotati.indexOf(viaggio);
        // // rimuovo dalla local storage
        // viaggiPrenotati.splice(index, 1);
        // localStorage.setItem(
        //   "etichetta",
        //   JSON.stringify(viaggiPrenotati)
        // );
        // console.log("cancello "+viaggiPrenotati.length);
        // console.log(viaggiPrenotati);

        // console.log(viaggiPrenotati.splice(i, 1));

        // da mettere il data-id

        // viaggiPrenotati.splice(i, 1);
        // viaggioJson = JSON.stringify(viaggiPrenotati);

        // localStorage.setItem('viaggiPrenotati', 'viaggioJson');
        // console.log(viaggiPrenotati);

        tr.remove();
      });
    }
  }
});

let h2 = document.createElement("h2");
let p = document.createElement("p");
//demo2.append(h2, p);

let acquistaBtn = document.querySelector("#acquistaBtn");

acquistaBtn.addEventListener("click", function () {
  const BIGLIETTTI_ACQUISTATI = "http://localhost:3000/bigliettiAcquistati";

  console.log("sono in fetch");

  fetch(BIGLIETTTI_ACQUISTATI, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(utenteAcquista()),
  })
    .then((data) => {
      console.log("sono in fetch2");
      return data.json();
    })
    .then(() => {
      //alert("grazie");
      alert("Grazie per averci scelto");
    });
});

class Biglietto {
  constructor(nome, email, tratta, pagamento) {
    this.nome = nome;
    this.email = email;
    this.pagamento = pagamento;
    this.tratta = tratta;
  }
}

function utenteAcquista() {
  let tratte = [];
  let nome = document.querySelector("#nome").value;
  console.log("preso nome");
  let email = document.querySelector("#email").value;
  console.log("preso cognome ");
  let viaggiArray = JSON.parse(localStorage.getItem("etichetta"));
  viaggiArray.forEach((viaggio) => {
    tratte.push(viaggio.id);
  });
  console.log("tratte sono" + tratte);
  let pagamento = document.querySelector('input[name="scelta"]:checked').value;

  let biglietto = new Biglietto(nome, email, tratte, pagamento);
  console.log("creato nuovo biglietto________");
  return biglietto;
}

function totale() {
  let viaggiLocalStorage = localStorage.getItem("etichetta");
  //console.log("sono i vaiggi dalla local storage"+viaggiLocalStorage); funziona

  let arrayViaggi = JSON.parse(viaggiLocalStorage);
  console.log(arrayViaggi);

  let tot=0;
  for (let i = 0; i < arrayViaggi.length; i++) {
    tot += arrayViaggi[i].costo
    
  }

  let totale = this.document.createElement("h2");
  let valore = this.document.createElement("h4");   
  let doveScrivere = this.document.querySelector("#totale");

  
  totale.textContent = "Totale";
  valore.textContent = tot;
  doveScrivere.appendChild(totale);
  totale.appendChild(valore);
}
totale();
