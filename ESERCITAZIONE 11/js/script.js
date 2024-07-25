class Messaggio {
  constructor(username, contenuto) {
    this.username = username;
    this.contenuto = contenuto;
  }
}

let messaggio = document.querySelector("#messaggio");
let btnInvia = document.querySelector("#btnInvia");
let demo = document.querySelector("#demo");
let charRes = document.querySelector("#caratteriRestanti");
let feed = document.querySelector("#feed");

let utenteScrivente = document.querySelector("#utenteScrivente");

//Ricorda che è sempre una buona pratica verificare se localStorage.getItem("messaggi") restituisce null (cioè se non ci sono messaggi salvati) e fornire un valore di default come un array vuoto [] nell'operatore ||. fonte chatgpt sensei
let messaggi =JSON.parse(localStorage.getItem("messaggi")) ||  []; // array di messaggi che riempio in creaMessaggio

utenteScrivente.textContent =
  localStorage.getItem("userConnesso") + " sta scrivendo...";

function creaMessaggio() {
  let nuovoMessaggio = new Messaggio(
    localStorage.getItem("userConnesso"),
    messaggio.value
  );
  console.log(nuovoMessaggio);
  messaggi.push(nuovoMessaggio); // pusho i messaggi in array

  let messaggiJSON = JSON.stringify(messaggi); // array di json
  localStorage.setItem("messaggi", messaggiJSON); // salvo in localStorage
  // messaggiDaStockare.push(messaggiJSON); // salvo i messaggi

  stampaMessaggi();
}
btnInvia.addEventListener("click", creaMessaggio);

function stampaMessaggi() {
  demo.innerHTML = "";

  let messaggiSpacchettati = JSON.parse(this.localStorage.getItem("messaggi"));

  for (let i = 0; i < messaggiSpacchettati.length; i++) {
    if (
      messaggiSpacchettati[i].username ===
      this.localStorage.getItem("userConnesso")
    ) {
      // stampa a destra
      demo.innerHTML += `<div class="mittente"><h4 >${messaggiSpacchettati[i].username}</h4><br><p>${messaggiSpacchettati[i].contenuto}</p></div>`;
    } else {
      demo.innerHTML += `<div class="destinatario"><h4 >${messaggiSpacchettati[i].username}</h4><br><p>${messaggiSpacchettati[i].contenuto}</p></div>`;
    }
  }

  // `<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  //         <div class="toast-header">
  //         <strong class="me-auto">+${messaggiSpacchettati[i].username}+</strong>
  //         <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button></div><div class="toast-body">+${messaggiSpacchettati[i].contenuto}+</div></div>`
}

function controllaCaratteri() {
  let carRestanti = 100 - messaggio.value.length;

  //charRes è lo span dello HTML
  charRes.textContent = carRestanti;

  if (carRestanti <= 0) {
    let contenutoMsg = document
      .querySelector("#messaggio")
      .value.substring(0, 100);
    messaggio.value = contenutoMsg;
    document.querySelector("#caratteriRestanti").textContent = 0;
    // messaggio.setAttribute("disabled", true);
  }
}

// messaggio è la mia textarea
messaggio.addEventListener("input", controllaCaratteri);

//------------------------------
// rimuove utente in sessione
// faccio logout e porto utente alla pagina di login
let logout = document.querySelector("#btnLogout");
function Logout() {
  localStorage.removeItem("userConnesso");
  location.reload();
  window.location = "./login.html";
}
logout.addEventListener("click", Logout);

// aggiunto anche bottone per svuotare la chat, pulisce la chat e rimuove i messaggi dal localStorage
let clearChat = document.querySelector("#clearChat");
clearChat.addEventListener("click", function () {
  localStorage.removeItem("messaggi");
  location.reload();
});
