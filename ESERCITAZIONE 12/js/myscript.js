const URL="https://dummyjson.com/products";


let carrelo=document.querySelector("#carrello");

let products=[];

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
        let ul=document.createElement("ul");
        products=response.data;
        products.forEach(prodotto => {

            let li=document.createElement("li");
            li.textContent=prodotto.title;
            let btn=document.createElement("button");
            btn.textContent="carrello";
            ul.appendChild(li);
            ul.appendChild(btn);



        
        });
    })

