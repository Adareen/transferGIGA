const URL = "https://dummyjson.com/products";

let elListaProd = document.querySelector("#elListaProd");

fetch(URL)
.then(data=>{return data.json()})
.then(response => {
    // response è l'object intero
    console.log(response);

    //response.products è l'array
    response.products.forEach(prodotto => {
        elListaProd.appendChild(creaItem(prodotto));
    });
});

/**
 * prodotto è il singolo oggetto nell'array products del JSON
 * @param {Object} prodotto 
 * @returns 
 */
function creaItem(prodotto){
    let li = document.createElement("li");
    li.setAttribute("class", "list-group-item");
    li.textContent = prodotto.brand + " " + prodotto.title + " - € " + prodotto.price;

    let btnAddCarrello = document.createElement("button");
    btnAddCarrello.setAttribute("class", "btn btn-primary");
    btnAddCarrello.innerHTML = "<i class='bi bi-cart'></i>";

    btnAddCarrello.addEventListener("click", function(){
        //Questa funzione salverà l'intero prodotto in local o session storage
        console.log("Id Prodotto: " + prodotto.id);
    })

    li.appendChild(btnAddCarrello);

    let prodottiJSON=JSON.stringify("prodotti", /* da mettere l'array che si crea in secondo then fetch*/)

    return li;
}