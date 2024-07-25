function prodotto()
{
    let numero1=document.getElementById("num1").value;
    let numero2=document.getElementById("num2").value;
    let res=numero1*numero2;
    write(res);
}

function divisione()
{
    let numero1=document.getElementById("num1").value;
    let numero2=document.getElementById("num2").value;
     let res=numero1/numero2;
     write(res);
}

function write(result)
{
    let pin=document.getElementById("pin");
    pin.innerHTML=result;
}




