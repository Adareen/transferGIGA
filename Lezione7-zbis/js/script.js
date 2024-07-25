function Utente(nome, cognome, email, tel){
    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
    this.tel = tel;
}

function registra(){
    //Recupero i value dei miei campi
    let nome = document.getElementById("nome").value;
    let cognome = document.getElementById("cognome").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;

    if(nome.trim() == "" || cognome.trim() == "" || email.trim() == "" || telefono.trim() == ""){
        feed.innerHTML = "<p>Amico, hai sicuramente dimenticato: </p>";
        if(nome.trim() == ""){
            feed.innerHTML += "<li> nome </li>";
        }

        if(cognome.trim() == ""){
            feed.innerHTML+= "<li> cognome </li>";
        }

        if(email.trim() == ""){
            feed.innerHTML+= "<li> email </li>";
        }

        if(telefono.trim() == ""){
            feed.innerHTML+= "<li> telefono</li>";
        }

        // event.preventDefault();
    }else{
        //creo l'utente
        let utente = new Utente(nome, cognome, email, telefono);
        listaUtenti.push(utente);
        console.log(utente);

        //pulisco i campi
        document.getElementById("nome").value = "";
        document.getElementById("cognome").value = "";
        document.getElementById("email").value = "";
        document.getElementById("telefono").value = "";
        
        feed.innerHTML = "";

        demo.innerHTML = "";
       // stampaLista(listaUtenti);
    }
}

/**
 * @param {Utente} utente 
 */
function creaCard(utente){
    let card = `<div class='boxUtente'> 
                    <p> ${utente.nome} ${utente.cognome} </p> 
                    <p> @: ${utente.email} </p>
                    <p> tel: ${utente.tel} </p>
                </div>`;
    return card;
}

/**
 * 
 * @param {Utente[]} listaUtenti 
 */
function stampaLista(listaUtenti){
    listaUtenti.forEach(utente =>{
        demo.innerHTML += creaCard(utente);
    })
}


let demo = document.getElementById("demo");
let feed = document.getElementById("feed");

let listaUtenti = [];


//La lista utenti non verrà più stampata ogni volta che ne registro uno nuovo ma ci sarà un pulsante per stampare l'intera lista. 