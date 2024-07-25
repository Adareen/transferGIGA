// dichiaro una funzione

function salutaUtente(){
    // corpo della funzione
    let nomeUtente="dario";
    let cognomeUtente="mennillo";

    // option 9 = ` backtick || option = ALT + 96 windows
    console.log(`ciao ${nomeUtente} ${cognomeUtente}`);
}

// richiamo la funzione 
salutaUtente();


function salutaDocente(){
    let nome="mauro";
    let cognome="bogliaccino";
    console.log(`Ciao docente ${nome} ${cognome}`);
}

salutaDocente();

function salutaRespo(){
    nome="egle";
    cognome="risola";
    console.log(`Ciao responsabile ${nome} ${cognome}`);
    


}

salutaRespo();

function salutaTutti(){
    console.log("saluto tutti in un colpo solo");
    salutaDocente();
    salutaRespo;
    salutaUtente;
}

// la voglio richiamare dall html