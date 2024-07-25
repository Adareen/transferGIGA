let numeriEstratti = [];
numeriEstratti.length = 6;

for (let i = 0; i < numeriEstratti.length; i++) {
  let numero = Math.ceil(Math.random() * 90);
  if (numeriEstratti.includes(numero)) 
  {
    i--;
  } else 
  numeriEstratti.push(numero);
}
console.log(numeriEstratti);
