function calcolaArea(base,altezza)
{
    let area=base*altezza;
    return area;

}

function calcolaVolume(base, altezaz, profondita){
    let volume=base*altezaz*profondita;
    return volume;
}


function calcolaVolumeConArea(base, altezza, profondita)
{
    let volume=calcolaArea(base,altezza)*profondita;
    //funzione di callback 
}


function calcoloVolume2(area, profondita)
{
    let volume = area* profondita;
    return volume;

}





//chiedo all'utente di fornire i numeri

let numeriUser=window.prompt("inserisci 3 numeri separati da virgola"); // prende una stringa in ingresso
let numeriUserArr=numeriUser.split(","); // [num1, num2, num3] // converto in array 
let valoreArea=calcolaArea(numeriUserArr[0], numeriUserArr[1]);
let valoreVolume3=calcoloVolume2(valoreArea, numeriUserArr[2]);
let demoArea= document.getElementById("demoArea");
let demoVolume=document.getElementById("demoVolume");

demoArea.innerHTML="l'area vale "+ valoreArea;
demoVolume.innerHTML="volume vale " + valoreVolume3;