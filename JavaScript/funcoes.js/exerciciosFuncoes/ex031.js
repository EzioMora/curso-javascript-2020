// 31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
// e imprime a quantidade no console.

const printNegativo = (Array = []) => {
    let countNegative = 0;
    let numNegative = [];

    if (Array.length > 0) {
        
        const isInteger = Array.every(num => Number.isInteger(num));

        if (!isInteger) {
            return "[ERRO] Inserte um vector com números inteiros!"
        }

        for (num of Array) {
            if (num < 0) {
                countNegative++;
                numNegative.push(num);
            }
        }

        if (countNegative > 0) {
            return `Detectamos ${countNegative} número(s) negativos => [${numNegative}]`;
        }
    }
    return `[ERRO] Inserte um vetor com números inteiros validos!`;
}

console.log(printNegativo());
console.log(printNegativo([]));
console.log(printNegativo([-3, -2, -1, 0, 1, 2, 3]));
console.log(printNegativo([-3, -2, -1, 0, 1.2, 2, 3]));
