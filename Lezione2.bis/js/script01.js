let nome="dario";
let cognome="mennillo"

// uso della concatenazione con + (concateno stringhe)
let benvenuto= "benvenuto"+" " +nome+" " + cognome;


// permette di SCRIVERE sulla CONSOLE del browser
console.log(benvenuto)

// nuovo set di istruzioni


// somma di due numeri; usare sempre una variabile nel caso in cui ci siano diversi operandi. 
let num1= 2; 
let num2= 7;
let valoreSomma=num1+num2;
let somma="la somma vale:" + valoreSomma; 
// GOOD PRACTICE: usare variabili esterne rispettto a uso di parentesi
console.log(somma);


// ALTRA FACCIA DELLA MEDAGLIA, qui concatena e non somma
let num3="9";
let num4="7";

let valSomma2= num3+num4;
let valProdotto2=num3*num4;
let valQuoziente2=num3/num4;
console.log("la somma vale" +  valSomma2); // concatena le stringhe e non esegue la somma

let valsomma2= Number(num3)+Number(num4); 
// case sensitive! CASTING A INT

console.log("La somma vale: " +  valSomma2); 
console.log("Il prodotto vale: "+ valProdotto2);
console.log("Quoziente vale: "+ valQuoziente2.toPrecision(3));


// CASTING -> altro modo è il parseInt <<

let variabile1= "2"; // queste sono stringhe 
let variabile2= "3";

let valoreDellaSomma=variabile1+variabile2; //verrà restituito il
let valoreDellaSomma2= parseInt(variabile1)+parseInt(variabile2); // questi sono stati parsati ad int, castati ad int
console.log(valoreDellaSomma);
console.log(valoreDellaSomma2);
 


