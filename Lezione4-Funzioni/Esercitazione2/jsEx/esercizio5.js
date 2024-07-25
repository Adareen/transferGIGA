/**
 * costruisci 2 array 
 * 1 per i prodotti 
 * 1 per i prezzi
 * 
 * crea una funzione che unisce prezzi con prodotti
 * 
 * crea una funzione che calcola il totale dei prezzi
 * 
 * crea la funzione stampaScontrino() che richiama le altre due funzionie e stampa tutto nella pagina 
 * con document.getelementbyid
 * 
 * NOTE: recupera i pezzi di html all'inizio del codice
 */

let listaScontrino=document.getElementById("listaScontrino");
let totaleScontrino=document.getElementById("totaleScontrino");

let prodotti=["mele","pere", "banane"];
let prezzi=[3,4,10];

function totalePrezzi()
{
    let tot=0;
    prezzi.forEach(prezzo => {
        tot+=prezzo;

        
        
        
    });
    
    if(tot>=10)
    {
        totaleScontrino.innerHTML=tot+ " OTTIENI SCONTO";
    }
    else{
        totaleScontrino.innerHTML=tot;
    }
}
//totalePrezzi();

function unisceLista(prodotto, prezzo)
{
    for(let i=0; i<prodotti.length; i++)
    {
        listaScontrino.innerHTML+=prodotti[i]+" - "+ prezzi[i] +"<br>";

    }
}
//unisceLista();

function stampaScontrino()
{
    unisceLista(prodotti, prezzi);
    totalePrezzi(prezzi);
}

function unisciPrezziProdottiDARIO(prezzo, prodotto)
{
    let prezzoProdotto=prezzo+ " - "+ prodotto;
    return prezzoProdotto
    }


function stampaScontrinoDARIO()
{
    for (let i=0; i<prodotti.length; i++)
    {
        let voceScont= unisciPrezziProdottiDARIO(prezzi[i], prodotti[i]);
        console.log(voceScont);
        listaScontrino.innerHTML+="<li>"+ voceScont+"</li>";
    }

}

// NOTA: dividi il lavoro nelle funzioni, se ha la funzione unisci lista, non devi stampare. stampi nello stampa scontrino
