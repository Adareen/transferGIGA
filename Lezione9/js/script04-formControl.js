let formReg = document.querySelector("#formReg");
let demo = document.querySelector("#demo");

// function validate() {
//   let userName = document.querySelector("#elUsername").value;
//   let email = document.querySelector("#elEmail").value;
//   let password = document.querySelector("#elPassword").value;

//   if (userName.length >= 8 && email.length >= 8 && password.length >= 10)
//     console.log("Registrazione done");
//   else {

//     // le prime due righe di codice sono essenziali, servono a stoppare il form dall'invio? boh da rivedere
//     event.preventDefault();
//     event.stopImmediatePropagation();
//     document.querySelector("#demo").innerHTML = "campi non compilati";
//   }
// }

function validate() {
  let userName = document.querySelector("#elUsername").value;
  let email = document.querySelector("#elEmail").value;
  let password = document.querySelector("#elPassword").value;

  if (userName.length < 8) {
    demo.innerHTML = "<p> username non coretto </p>";
    event.preventDefault();
    event.stopImmediatePropagation();
    
  }

  let regexEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(!email.match(regexEmail))
  {
    demo.innerHTML = "<p> email non coretta </p>";
    event.preventDefault() // previene il submit del form;
    event.stopImmediatePropagation();
  }

  let regexPassword=/^[A-Za-z]\w{7,14}$/;
  if(!password.match(regexPassword))
  {
    demo.innerHTML = "<p> password non coretta </p>";
    event.preventDefault();
    event.stopImmediatePropagation();
    // stop immediate propagation tagli i ponti con tutti gli eventi che si possono presentare dopo e quindi non permette che vengano scatenati/ascotlati
  }
}

formReg.addEventListener("submit", validate);
