/*
da approfondire: 
come passare gli argomenti alle funzioni da html.
uso di value per prendere valori dagli input text/number

*/


function capitalize(testo) {

  let fraseS = testo.split(" "); // converto in array
  
  for (let i = 0; i < fraseS.length; i++) {
    // taglio e cucito. cherry picking sul primo valore e poi uppercase
    let c = fraseS[i].charAt(0).toUpperCase(); // prende il primo carattere di ogni stringa che si trova in array di posto i e lo mette in uppercase
    fraseS[i] = c + fraseS[i].slice(1); // ricostruisco la parola con c (carattere in upper case) + la parola sliced dal primo carattere in poi fino alla fine

    // js is my passion. ho speso 5 ore per sta cosa
  }



  let fraseRecon = fraseS.join(" ");
  let lol = document.getElementById("lol");
  
  lol.innerHTML = fraseRecon;
}

function show(){
    let a=document.getElementById("disg");
    a.innerHTML= '<img src="https://i.imgflip.com/8bjkwo.jpg" >';
}



