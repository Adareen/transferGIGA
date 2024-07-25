// Scrivere un programma che calcola il perimetro e l’area di un triangolo avente i lati della seguente lunghezza: 5,6,7.

// uso la formula di erone per calcolare area con lati

let lato1=5;
let lato2=6;
let lato3=7;

function calcolaP(lato1, lato2, lato3)
{
 

    let perimetro=lato1+lato2+lato3;
    return perimetro;
}



function calcolaA(lato1,lato2,lato3)
{

    let sp= calcolaP(lato1,lato2,lato3)/2;
    //posso fare questa roba?

    let area=Math.sqrt(sp*(sp-lato1)*(sp-lato2)*(sp-lato3));
    return area;
}