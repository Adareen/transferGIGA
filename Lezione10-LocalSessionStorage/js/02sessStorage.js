// let utenteConnesso={
//     nome: "pippo",
//     cognome:"la coca",
//     connesso: true,
//     tipo:"admin"
// }

class Utente {
    constructor(nome, cognome, tipo) {
        this.nome = nome;
        this.cognome = cognome;
        this.tipo = tipo;
    }
}

let btn=document.querySelector("#btn");
let demo=document.querySelector("#demo");
let elNome=document.querySelector("#elNome");
let elCognome=document.querySelector("#elCognome");
let elTipo=document.querySelector("#elTipo");
let logout=document.querySelector("#logout");

function registraUser(){

    let utente=new Utente(elNome.value, elCognome.value, elTipo.value);

    let utenteConnessoJSON=JSON.stringify(utente); // crea una stringa dall'oggetto 
    localStorage.setItem("userConnesso",utenteConnessoJSON); // registra utente in sessione setItem()
    location.reload(); //questo permette di ri-caricare la pagina 
}
btn.addEventListener("click", registraUser);


// adesso al caricamento della pagina leggo il localStorage e stampo le info dell'utente connesso; 
window.addEventListener("DOMContentLoaded", function(){

    if(this.localStorage.length !=0 && this.localStorage.key(0)=="userConnesso"){

    let userConnesso=JSON.parse(this.localStorage.getItem("userConnesso")); // ricevo un json formato stringa, con parse lo trasformo in oggetto
    console.log(userConnesso);

    demo.innerHTML=`<p>${userConnesso.nome} ${userConnesso.cognome} - tipo: ${userConnesso.tipo}</p>`;
    }
    else{
        demo.innerHTML="<p> no utente connesso </p>";
    }


})

function Logout(){
    // localStorage.clear(); // cancella tuttla la local storage

    localStorage.removeItem("userConnesso");
    location.reload();
}
logout.addEventListener("click", Logout);

// ------------------------------- se avessi un array di oggetti?

let studenti=[
    {
        nome: "pippo",
        cognome:"rossi",
        matricola:1
    },
    {
        nome: "paola",
        cognome:"verdi",
        matricola:2
    },
    {
        nome: "andrea",
        cognome:"bianchi",
        matricola:3
    },
   
]

let studentiJSON=JSON.stringify(studenti);
sessionStorage.setItem("studenti", studentiJSON)