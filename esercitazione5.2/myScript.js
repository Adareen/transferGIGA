let area = document.querySelector("#area"); // messaggio
let contaParole = document.querySelector("#contaParole");
let input = document.querySelector("#input");
let username = document.querySelector("#username"); // username
let form = document.querySelector("#form");
let contenitore = [];
let mydiv = document.querySelector("#arrivo");

class messaggioArea {
  constructor(username, messaggio) {
    this.username = username;
    this.messaggio = messaggio;
  }
}

area.addEventListener("input", function () {
  contaParole.textContent = `${100 - area.value.length}/100`;
});


form.addEventListener("submit", function () {
  console.log("messaggio creato");
  let message = new messaggioArea(username.value, area.value);
  aggiungiMessaggio(message);

  console.log("messaggio pushato");
  let h3 = document.createElement("h3");
  let p = document.createElement("p");
  mydiv.appendChild(h3);
  mydiv.appendChild(p);

  h3.textContent = message.username;
  p.textContent = message.messaggio;

  event.preventDefault();
});

function checkUsername(){
    if(username.value.length<5)
    {
        let campo=document.querySelector("#campo");
        campo.textContent="Username is too short! min 5 char";
        campo.style.color = "red";

    }else
    campo.textContent="";

    
       
};

function aggiungiMessaggio(mioMessaggio) {
  contenitore.push(mioMessaggio);
  console.log("ho aggiunto il messaggio all'array ");
  console.log(this.username.value);
  console.log(contenitore.length);
}

username.addEventListener("blur", checkUsername);
