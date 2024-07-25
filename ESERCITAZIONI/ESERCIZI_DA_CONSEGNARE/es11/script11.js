//Esercizio 11 – Scrivi un programma che accetta due numeri interi e mostra il maggiore tra i due. (Utilizzawindow.prompt e .alert)

/* 
spring boot
git hub
angular 
bootstrap 

-- DA AGGIUNGERE AL CV

*/

function insertNumbers(){
    let a=Number(window.prompt("inserisci num1"));
    let b=Number(window.prompt("inserisci num2"));
    alert("il maggiore è: "+ major(a,b));

}

function major(num1, num2)
{
    if(num1>num2)
    return num1;
    else
    return num2;
}