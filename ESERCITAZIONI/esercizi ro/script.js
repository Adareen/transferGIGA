// for (let i = 0; i < 100; i++) {

//     let numero=Math.ceil(Math.random()*25)+25;
//     if(numeriEstratti.includes(numero))
//     {
//         i--;
//     }
//     else
//     {
//         numeriEstratti.push(numero);
//     }

// }

// let numeriEstratti = [];
// while (numeriEstratti.length = 5) {
//   let numero = Math.ceil(Math.random() * 25) + 25;

//   if(numeriEstratti.includes(numero))
//     {
//         numeriEstratti.length--;
//     }
//     else
//     {

//         numeriEstratti.push(numero);
//     }

//   //   if (!numeriEstratti.includes(numero)) numeriEstratti.push(numero);
// }
// console.log(numeriEstratti);

//// da 1 a 90 senza if 10 numeri, costruire array
let setPerEstrazione = [];
let nEstratti=[];
for (let i = 0; i < 90; i++) {
  setPerEstrazione.push(i + 1);
}
console.log(setPerEstrazione);

for (let i = 0; i < 6; i++) {
  let numeroEstratto = Math.floor(Math.random()*setPerEstrazione.length);
  setPerEstrazione.splice(numeroEstratto, i);
  nEstratti.push(numeroEstratto);
}
console.log(nEstratti);
