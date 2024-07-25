function args(argomento) {
  return typeof argomento;
}

function massimiliano(passamiLoSdrogo) {
  let pMax = "";
  let max = 0;
  let parole = [];
  parole = passamiLoSdrogo.split(" ");

  parole.forEach((element) => {
    if (element.length > max) {
      max = element.length;
      pMax = element;
    }
  });
  return pMax;
}

// Es4 Dall’html recupera una stringa e ruotala da sinistra verso destra rimuovendo una lettera dal fondo ed inserendola all’inizio, deve essere visibile l’animazione.

//let prr = document.getElementById("prr").value;
let prre = document.getElementById("prre");
function ruota(stringa) {
  setInterval(() => {
    let c = stringa.charAt(stringa.length - 1);
    stringa = c + stringa.slice(0, stringa.length - 1);
    // console.log(stringa); funziona nella console
    prre.innerHTML = stringa;
  }, 150);
}

// Scrivi un programma che accetta (da finestra) un numero come input e inserisce un dash (-) tra due numeri pari. Es ( 823486 -> 8-234-8-6 )

function dashEven() {
  let myVal = window.prompt("inserisci valori:").split("");
  let stringaSupport = "";

  for (let i = 0; i < myVal.length; i++) {
    if (myVal[i] % 2 == 0 && myVal[i + 1] % 2 == 0)
      stringaSupport += myVal[i] + "-";
    else stringaSupport += myVal[i];
  }
  console.log(stringaSupport);
}

// Scrivi un programma per inserire degli elementi in un array vuoto e farli stampare quando viene premuto un bottone

function creaArray() {
  let array = window.prompt("inserisci valori da stampare: es 6 :)").split("");
  return array;
}

let myArray = creaArray();

function stampaArray(array) {
  array = myArray;
  console.log(array);
}

//Scrivi una funzione javascript che rimuova gli elementi duplicati da un array.
let myArrayNum = [1, 2, 3, 4, 5];

function deleteDuplicate() {
  let array = [1, 2, 2, 3, 3, 4, 5, 5];
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] == array[j] && i != j) {
        array.splice(i, 1);
        console.log("elemento rimosso: " + array[i]);
      }
    }
  }
  console.log(array);
}

//Dati due array, calcolare la somma degli elementi presenti nello stesso indice. Esempio:
// array1 = [1,0,2,4,6]
// array2 = [0,4,5,8,7]
// Output = [1,4,7,12,13]

function sommaEl() {
  let array1 = [1, 0, 2, 4, 6];
  let array2 = [0, 4, 5, 8, 7];
  let output = [];

  //Output = [1,4,7,12,13];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array1.length; j++) {
      if (i == j) {
        let sum = array1[i] + array2[j];
        output.push(sum);
      }
    }
    console.log(output);
  }
}

//Scrivi una funzione che unisca due array rimuovendo gli elementi in comune.

function deleteDuplicate() {
  let array = [1, 2, 2, 3, 3, 4, 5, 5];
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] == array[j] && i != j) {
        array.splice(i, 1);
        console.log("elemento rimosso: " + array[i]);
      }
    }
  }
  console.log(array);
}

let arr1 = [1, 0, 2, 4, 6];
let arr2 = [4, 5, 4];

function appendArray(array1, array2) {
  array1 = arr1;
  array2 = arr2;

  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] == array2[j] ) {
        
        array1.splice(i, 1);
        array2.splice(j, 1);
      }
    }
  }let arr3=array1.concat(array2);
  console.log(arr3);
}
