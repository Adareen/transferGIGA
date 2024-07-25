let sezioneCommenti = document.querySelector("#sezioneCommenti");

let btn = document.querySelector("#btn");

const URLPosts = "https://dummyjson.com/posts";

function mostraCommenti() {
  fetch(URLPosts)
    .then((data) => {
      return data.json();
    })
    .then((response) => {
      console.log(response.posts);

      response.posts.forEach((post) => {
        sezioneCommenti.innerHTML += stampaCommenti(post);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}
// dopo il then: catch quando non viene soddisfatta la promise

btn.addEventListener("click", mostraCommenti);

function stampaCommenti(post) {
  let cardPost = `<div class="cardPost">
                  <h3>Utente ${post.userId} - ${post.title}</h3>
                  <p>${post.body}</p>
                  </div>`;
  return cardPost;
}