/*
Crea un form con due caselle di input e un pulsante. Nella prima casella verrà inserito l’anno di
nascita dell’utente, nella seconda verrà inserito l’anno corrente oppure un anno a scelta. Al click sul
bottone verrà calcolata l’età dell’utente.
 */
function yourage(){
    let year1= document.getElementById("dob").value;
    let year2= document.getElementById("curr").value;
    let age=year2-year1;
    let pin=document.getElementById("pin");
    pin.innerHTML=age;
    
}
