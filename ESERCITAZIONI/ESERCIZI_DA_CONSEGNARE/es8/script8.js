function inverti(){
let parola=document.getElementById("testo").value;
let testoinv=document.getElementById("testoinv");
let parolaInArrayEInvertita=parola.split("").reverse().join("");
testoinv.innerHTML=parolaInArray;

}

