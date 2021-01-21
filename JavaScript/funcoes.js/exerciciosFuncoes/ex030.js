// 30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
const maiorEMenor = (Array) => {
  if (Array.length == 0) {
    return "[ERRO] Inserte um vector com números inteiros!"
  }
  
  const isInteger = Array.every(num => Number.isInteger(num));
  
  if (!isInteger) {
    return "[ERRO] Inserte um vector com números inteiros!"
  }
  
  let numMaior = Math.max(...Array);
  let numMenor = Math.min(...Array);
  return `Dentro del vector [${Array}] o maior número é ${numMaior} e o menor ${numMenor}`;
}

console.log(maiorEMenor([]));
console.log(maiorEMenor([5, 20.2, 10, 8, 21]));
console.log(maiorEMenor([5, 20, 10, 8, 21]));