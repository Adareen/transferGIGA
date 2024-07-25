//recupero i dati statici
let btnAdd = document.querySelector("#btnAdd");
let elLista = document.querySelector("#elLista");
let item=document.querySelector("#item");

let btnRem=document.querySelector
// per recuperare gli id ricordati gli # hashtag

// funzione che adda roba
function add() {
  let todo = item.value; // recupera il valore

  let li = document.createElement("li"); // document recupera un oggetto, ed in questo caso sto creando un elemento
  li.textContent = todo; // aggiungo proprietà  <li>todo</li>
  li.setAttribute("class", "txtBlue");

  li.onclick = function () {
    li.classList.toggle("txtBarrato");
  }; // funzione anonima, funzione creata al volo per esempio mette e togli il barrato


  let btnRem=document.createElement("button");
  btnRem.textContent=" X ";
  li.appendChild(btnRem);

  btnRem.onclick=function(){
    elLista.removeChild(li);
  }

  elLista.appendChild(li); // permette di agganciare un figlio al mio elementolista
}

// versione intermedia
btnAdd.onclick = add;

function remAll(){
    //elLista.innerHTML="";
    let lis=document.querySelectorAll("#elLista li");
    lis.forEach(li=> {
        elLista.removeChild(li); // che sciccheria
    })
}
btnRemAll.onclick=remAll;
