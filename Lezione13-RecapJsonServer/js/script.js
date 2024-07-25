// questa funzione recupera tutti gli studenti

function scaricaStudenti(){
    const urlEndPoint="http://localhost:3000/studenti";
    
    // se voglio fare una get non passo nulla alla fetch, inteso come parametro passato come secondo argomento
    fetch(urlEndPoint)
    .then(data=>{ return data.json() }) // smazzo i dati del server, primo consumer
    .then(response=>{
        // response è un array di oggetti di "tipo Studente"
        console.log(response); // secondo then, secondo consumer

        let studenti=response;
        for (const studente of studenti) {
            demo.innerHTML+=stampaStudente(studente);
        }
    })
}
window.addEventListener("DOMContentLoaded",scaricaStudenti);


let demo=document.querySelector("#demo");

function stampaStudente(studente){
    let rigaStudente=`<li> ${studente.nome} ${studente.cognome} - corso ${studente.corso} </li>`;
    return rigaStudente;
}

// voglio registrare gli studenti sul db
function salvaStudente(studente)
{
    const URLEndpoint="http://localhost:3000/studenti"
    let nuovoStud={
        "id": "15",
        "nome":"maria",
        "cognome":"db",
        "corso":"lol"
    };

    fetch(URLEndpoint, {
        method: "POST",
        headers:{ "Content-Type":"application/json"},
        body: JSON.stringify(nuovoStud)
    })
    .then(data=> {return data.json()})
    
}
let btn=document.querySelector("#btn");

btn.addEventListener("click",salvaStudente);