function Utente(nome, cognome, email, tel) {
  this.nome = nome;
  this.cognome = cognome;
  this.email = email;
  this.tel = tel;
}

function registra() {
  // recupero i value dei miei campi
  let demo = document.getElementById("demo");
  let nome = document.getElementById("nome").value;
  let cognome = document.getElementById("cognome").value;
  let email = document.getElementById("email").value;
  let tel = document.getElementById("tel").value;

  // creo utente

  if (
    nome.trim() == "" ||
    cognome.trim() == "" ||
    email.trim() == "" ||
    tel.trim() === ""
  ) {
    console.log("campo vuoto, errore");
  } else {
    let utente = new Utente(nome, cognome, email, tel);
    listaUtenti.push(utente);
    write(utente);
    console.log(utente);
    document.getElementById("nome").value = "";
    document.getElementById("cognome").value = "";
    document.getElementById("tel").value = "";
    document.getElementById("email").value = "";
  }
}

// let feed=document.getElementById("feed");


function write(utente)
{

    let demo= document.getElementById("demo");
    demo.innerHTML+="<li>"+utente.nome+"</li>";
    demo.innerHTML+="<li>"+utente.cognome+"</li>";
    demo.innerHTML+="<li>"+utente.tel+"</li>";
    demo.innerHTML+="<li>"+utente.email+"</li>";
}

function creaCard(){

}

let listaUtenti= [];

// la lista utenti non verrà più stampata ogni volta che ne registro uno nuobo ma ci sarà un pulsante per stampare l'intera lista

