// 29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
// deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
// deles estão fora do intervalo, escrevendo estas informações.
let countInIntervalo = 0;
let numInIntervalo = [];
let countOutIntervalo = 0;
let numOutIntervalo = [];
console.log(numInIntervalo.length)

const intervalo = (Array) => {

  if (Array.length > 0) {
    let printResult = "";

    for (num of Array) {
      if (num >= 10 && num <= 20) {
        countInIntervalo++;
        numInIntervalo.push(num);
      } else {
        countOutIntervalo++;
        numOutIntervalo.push(num);
      }
    }

    if (countInIntervalo > 0) {
      printResult += `Número(s) dentro do intervalo ${countInIntervalo} e são [${numInIntervalo}] `;
    }

    if (countOutIntervalo > 0) {
      printResult += `Número(s) fora do intervalo ${countOutIntervalo} e são [${numOutIntervalo}]`;
    }
    return printResult;
  }
  return "[ERRO] Inserte um vector valido!";
}

console.log(intervalo([]));
console.log(intervalo([5, 6, 8, 10, 13, 17, 20, 25, 30]));