const URLEndpoint = "http://localhost:3000/studenti";

// simula internet
let btnReg = document.querySelector("#btnReg");
let demo = document.querySelector("#demo");

fetch(URLEndpoint) //fetch x accedere alla pagina
  .then((data) => {
    return data.json();
  }) // la prima then riceve dati dal server SEMPRE - consuma i dati server // xmlhttprequest
  .then((response) => {
    //in questo caso la response è un Array di oggetti
    console.log(response); // response sono i dati, già trasformati in oggetto.

    response.forEach((studente) => {
      demo.innerHTML += `<li> ID: ${studente.id} ${studente.nome} ${studente.cognome}</li>`;
    });
  });

btnReg.addEventListener("click", function () {
  let nomeStud = document.querySelector("#nomeStud").value;
  let cognomeStud = document.querySelector("#cognomeStud").value;

  if (nomeStud != "" && cognomeStud != "") {
    // var è una variabile globale e viene vista a livello di tutto il codice rispetto che a var
    var nuovoStud = new Studente(nomeStud, cognomeStud);

    // let nuovoStud={
    //     id:"4",
    //     nome:"pasquale",
    //     cognome:"gialli"
    // }

    // come mando i dati al server
    fetch(URLEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(nuovoStud),
    }).then((data) => {
      return data.json();
    });
  } else {
    console.log("non hai inserito nulla");
  }
});

class Studente {
  constructor(nome, cognome) {
    this.nome = nome;
    this.cognome = cognome;
  }
}

// nome cognome email, rubrica - da inserire
/*
rubrica: [
    {
    id:
    nome:
    email: 
    tel: 
    }   
]
*/
