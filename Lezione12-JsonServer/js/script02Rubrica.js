let demo = document.querySelector("#demo");
const URLEndpoint = "http://localhost:3000/rubrica";
let submit = document.querySelector("#submit");
let pagina = 0;




class Contatto {
  constructor(nome, cognome, email, tel) {
    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
    this.tel = tel;
  }
}

submit.addEventListener("click", function () {
  let nome = document.querySelector("#nome").value;
  let cognome = document.querySelector("#cognome").value;
  let email = document.querySelector("#email").value;
  let tel = document.querySelector("#tel").value;

  if (nome != "" && cognome != "" && email != "" && tel != "") {
    var nuovoContatto = new Contatto(nome, cognome, email, tel);

    // aggiungere gli appendchild coi valori per stampare in pagina html

    // sparo in json-server
    fetch(URLEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuovoContatto),
    }).then((data) => {
      return data.json();
    });
  } else {
    demo.innerHTML = "Campi vuoti";
  }
});

let btnCarica = document.querySelector("#btnCarica");

btnCarica.addEventListener("click", function () {
  
  pagina++;
  fetch(URLEndpoint +`?_page=${pagina}&_per_page=10`)
  .then((data) => {
      console.log(pagina);
      console.log(data);

      return data.json();
    })
    .then((response) => {
      console.log(response);
      if (pagina <= response.last) {
        for (const contatto of response.data) {
          // console.log(contatto.nome);
          // console.log(contatto.cognome);
          // console.log(contatto.email);
          // console.log(contatto.tel);
          creaCard(
            contatto.nome,
            contatto.cognome,
            contatto.email,
            contatto.tel
          );
        }
      }
      if (response.next == null) {
        btnCarica.textContent = "Nessun Contatto da Caricare";
        btnCarica.setAttribute("class", "btn btn-secondary disabled");
      }
    })

event.preventDefault();
});

let divCard = document.querySelector("#demo");

function creaCard(nome, cognome, email, tel) {
  let contatto = new Contatto(nome, cognome, email, tel);

  let cardBorder = document.createElement("div");
  cardBorder.setAttribute("class", "col card border-primary mt-2 m-2");
  cardBorder.setAttribute("style", "width: 300px");
  let cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body");
  //cardBody.setAttribute("style","background-color: rgb(83, 145, 193)")

  divCard.appendChild(cardBorder);
  cardBorder.appendChild(cardBody);
  let h4 = document.createElement("h4");
  let p = document.createElement("p");
  let pTel = document.createElement("p");
  let del = document.createElement("button");

  h4.setAttribute("class", "card-title");
  p.setAttribute("class", "card-text");
  pTel.setAttribute("class", "card-text");
  del.setAttribute("class", "btn btn-danger mt-2");
  del.textContent = "Elimina Contatto";

  cardBody.append(h4, p, pTel, del);
  h4.textContent = `${contatto.nome} ${contatto.cognome}`;
  p.textContent = `Email: ${contatto.email}`;
  pTel.textContent = `Telefono: ${contatto.tel}`;
}

