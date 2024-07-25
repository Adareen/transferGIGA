let listaContatti=document.querySelector("#listaContatti");
// fetch è un api che ci mette a disposizione dei metodi per poter chiamare delle api esterne 

const URL="https://reqres.in/api/users?page=2";

let utenti=[];

fetch(URL)
    .then(data=>{

        // raccolgo le info dal server 
        // nel caso in cui le risorse non siano state caricate correttamente posso reindirizzare l'utente
        console.log(data);
        return data.json();
    })
    .then(response=>{

        // nella response il json è già stato parserizzato
        console.log(response);

        // voglio vedere gli utenti. si trovano sotto la prop data dell'oggetto. questo data non è il data di sopra nella prima then
        //console.log(response.data);

        utenti=response.data;
        utenti.forEach(utente => {
            listaContatti.innerHTML+="<li>"+utente.first_name+" "+utente.last_name+"</li>"
        });
    })







// due executor  success e fail
let promessa=new Promise((success,fail) => {
    let  num=Math.random();
    if(num<0.5)
    {
        setTimeout(() => {
            success("bravo sei sotto 0.5. PORCO!");
        }, 2000);
    }
    else{
        setTimeout(() => {  
            fail("perso. PORCO CANE");
        }, 2000);

    }
    console.log(num);
})

promessa.then(
    result =>{ console.log(result)}, 
    error=>{ console.log(error)}
)


// function success(){
    // le rivedremo in quanto troppi assenti

// }

// function fail(){

// }

// promessa.then();