let cart = document.querySelector("#cart");

cart.addEventListener("click", () => {
  // spostati in pagina carrrello metti in local storage
});

let viaggiPrenotati =JSON.parse(localStorage.getItem("etichetta"))||[];

window.addEventListener("DOMContentLoaded", () => {
  const POINT = "http://localhost:3000/viaggi";
  fetch(POINT)
    .then((data) => {
      return data.json();
    })
    .then((res) => {
      console.log(res);
      let viaggi = res;
      res.forEach((viaggio) => {
        let card = document.createElement("div");
        card.setAttribute("class", "card m-3 ");
        card.setAttribute("style", "width: 18rem");

        card.innerHTML = `
        <img src=${viaggio.locandina} class="card-img-top mt-3" alt="..." style="border-radius: 5px; height:200px">
        <div class="card-body">
        <h5 class="card-title">${viaggio.tratta}</h5>
        <p class="card-text">Costo: ${viaggio.costo}$</p>
        <p class="card-text">Mezzo: ${viaggio.mezzo}</p>

        
        </div>
    `;

        let select = document.createElement("select");
        select.setAttribute("class", "form-select form-select-sm");
        select.setAttribute("aria-label", "Small select example");

        let optionBase = document.createElement("option");
        optionBase.setAttribute("selected", "");
        optionBase.textContent = "Scegli un opzione";

        let option1 = document.createElement("option");
        option1.setAttribute("value", "0$");
        option1.textContent = "Base +0$";
        let option2 = document.createElement("option");
        option2.setAttribute("value", "25$");
        option2.textContent = "Business +25$";

        let option3 = document.createElement("option");
        option3.setAttribute("value", "50$");
        option3.textContent = "Premium +50$";

        select.append(optionBase, option1, option2, option3);
        card.appendChild(select);

        let button = document.createElement("button");
        button.textContent = "Aggiungi al carrello";
        button.setAttribute("class", "btn btn-primary mt-1 mb-3");
        card.appendChild(button);

        let p=document.createElement("p");
        select.addEventListener("change", function () {
        
          let costo=parseFloat(viaggio.costo)+parseFloat(select.options[select.selectedIndex].value);
          p.innerText = `Totale: ${costo}$`;
          card.appendChild(p)
        });

        demo.appendChild(card);
        button.addEventListener("click", function () {
          let pi = document.createElement("p");
          pi.innerHTML = `Oggetto Aggiunto al carrello <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
          </svg>`;
          card.appendChild(pi);

          button.disabled = true;

          viaggiPrenotati.push(viaggio);

          let viaggioJson = JSON.stringify(viaggiPrenotati);

          //let viaggioJSON = JSON.stringify(viaggio);

          //viaggiPrenotati.push(viaggioJSON);

          localStorage.setItem("etichetta", viaggioJson);
          console.log("aggiungo "+ viaggiPrenotati.length);
          console.log(viaggiPrenotati);

          let btnrimuovi = document.createElement("button");
          btnrimuovi.setAttribute("class", "btn btn-danger mb-3");
          btnrimuovi.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
          </svg>`;

         
          card.appendChild(btnrimuovi);

          btnrimuovi.addEventListener("click", function () {
            let index = viaggiPrenotati.indexOf(viaggio);
            // rimuovo dalla local storage
            viaggiPrenotati.splice(index, 1);
            localStorage.setItem(
              "etichetta",
              JSON.stringify(viaggiPrenotati)
            );
            console.log("cancello "+viaggiPrenotati.length);
            console.log(viaggiPrenotati);

            btnrimuovi.parentNode.removeChild(btnrimuovi); // rimuovo il pulsante e abilito di nuovo il pulsante aggiungi

            pi.textContent = "";
            button.disabled = false;
            
          });
        });
      });
    });
});


