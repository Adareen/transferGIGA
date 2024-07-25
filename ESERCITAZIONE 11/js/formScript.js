let username = document.querySelector("#username");
let btnLogin = document.querySelector("#btnLogin");
let form = document.querySelector("#formLogin");

form.addEventListener("submit", function () {
  localStorage.setItem("userConnesso", username.value);
  location.reload();
});
