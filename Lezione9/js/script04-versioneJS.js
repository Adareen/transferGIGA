let formReg= document.querySelector("#formReg");
let regexEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let regexPassword=/^[A-Za-z]\w{7,14}$/;

let userName = document.querySelector("#elUsername");
let email = document.querySelector("#elEmail");
let password = document.querySelector("#elPassword");
let demo=document.querySelector("#demo");

function validate(){
    let inputs=document.querySelectorAll("#formReg input");

    inputs.forEach(input=>{
        if(input.classList.contains("borderRed")){
            demo.innerHTML="campi non completi";
        event.preventDefault();
        event.stopImmediatePropagation();
        }
    })

}

function checkUsername( ){
    if(userName.value.length<8)
    {
        userName.classList.add("borderRed");
        userName.classList.remove("borderGreen");
    }
    else{
        userName.classList.add("borderGreen");
        userName.classList.remove("borderRed");
    }
   
}

function checkEmail(){
    if(!email.value.match(regexEmail))
    {
        email.classList.add("borderRed");
        email.classList.remove("borderGreen");
    }
    else{
        email.classList.add("borderGreen");
        email.classList.remove("borderRed");
    }

}

function checkPassword(){
    if(!password.value.match(regexPassword))
    {
        password.classList.add("borderRed");
        password.classList.remove("borderGreen");
    }
    else{
        password.classList.add("borderGreen");
        password.classList.remove("borderRed");
    }

}


formReg.addEventListener("submit", validate);

userName.addEventListener("blur", checkUsername);
password.addEventListener("blur", checkPassword);
email.addEventListener("blur", checkEmail);

