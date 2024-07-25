function inverti(){
    
    let parola=document.getElementById("testo").value;
    let testoinv=document.getElementById("testoinv");

    let arrInv=[""];
    arrInv.length=parola.length;

    let x=parola.length-1;// mi elimino il carattere terminatore
    let parolaInArray=parola.split("");
    for(let i=0; i<parola.length; i++)
    {

        arrInv[i]=parolaInArray[x--];
    }

    let parolaInArrayEInvertita=arrInv.join("");



    testoinv.innerHTML=parolaInArrayEInvertita;
    


    }
    