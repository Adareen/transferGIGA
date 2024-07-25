let studenti=[
    "Artuso Giulia",
    "Castaldo Leonardo",
    "Ghirardi Surya",
    "Grandis Gabriele",
    "Himollari Mario",
    "Alessio Del Monte",
    "Eliana Bove", 
    "Stefania Neri", 
    "Andrea Rizzo",
    "Best Makoumba",
    "Leonte Ionela"
]; // questo è un array

// per stampare array, itero con for

// recupero l'ul 
let elencoStud=document.getElementById("elencoStud");
// buona norma inserisci semore il getElementById. JS non si pianta selo ometti ma buona norma metterlo


for (let i=0; i<studenti.length; i++ )
{
    console.log( studenti[i]);
    elencoStud.innerHTML+= "<li>"+studenti[i]+"</li>";

}