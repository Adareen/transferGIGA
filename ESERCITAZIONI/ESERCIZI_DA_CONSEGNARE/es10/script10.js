/*
Esercizio 10 – Crea una funzione in javascript per generare una stringa di caratteri casuali specificandone la
lunghezza. Utilizza l’intero alfabeto e i numeri (form input) */

function generateString(nCaratteri) {
  let array = [];
  let c;
  let b = document.getElementById("b");

  array.length = nCaratteri;
  for (let i = 0; i < array.length; i++) {
    c = Math.random() * 256;
    c = Math.round(c);

    if ((c >= 48 && c <= 57) || (c >= 97 && c <= 122) || (c >= 65 && c <= 90)) {
      array[i] = c;
      let str = String.fromCharCode(array[i]);

      console.log(str);
      b.innerHTML += str; // ricorda il più uguale, altrimenti stampi solo un carattere
    } else {
      i--;

 
  
      
      // questa è unaprova :)

    }
  }
}
