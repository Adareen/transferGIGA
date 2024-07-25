// INTERAZIONE CON UTENTE
// uso di prompt che non si usa più ma utile
let primoNum= window.prompt("Inserisci il primo numero");  
let secondoNum=window.prompt("inserisci secondo numero");

// con il prompt registro nella varibile il valore che inserisce l'utente

let somma=primoNum+secondoNum;
console.log("valore della somma:"+ somma); // quello che ottengo è una concatenazione delle stringhe e non una somma. JS prende tutti gli input dell'utente come stringa, quindi >> CAST ad INT


let primoNum1= Number(window.prompt("Inserisci il primo numero"));  // il casting va fatto sul window.prompt
let secondoNum1=Number(window.prompt("inserisci secondo numero"));

// con il prompt registro nella variabile il valore che inserisce l'utente

let somma1=primoNum1+secondoNum1;
let prodotto=primoNum1*secondoNum1;
let differenza=primoNum1-secondoNum1;
let quoziente=(primoNum1/secondoNum1).toPrecision(3);

console.log("valore della somma:"+ somma1); 
console.log("valore della prodotto:"+ prodotto); 
console.log("valore del quoziente:"+ quoziente); 
console.log("valore della differenza:"+ differenza); 


/*  
    voglio stampare questi risultati nella pagina web:

    1. recupero l'elemento attraverso id getelementbyid, controlla che nell'html ci sia l'id 

    2. inietto la stringa dei risultati nell'elemento elRisultati
*/

// let elElemento=document.getElementById("etichetta_id")
// 

let elRisultati=document.getElementById("risultati")   
// el vuol dire elemento dell'html
// let Etichetta="seriedistringhe";
// elEtichetta.innerHTML=Etichetta

let Risultati= "Somma: " + somma1 + " <br> Differenza: " + differenza + "<br> Prodotto:" + prodotto + "<br> Quoziente:" + quoziente;

elRisultati.innerHTML=Risultati; 