// 32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

const mediaAritmetica = (Array = []) => {
    if (Array.length == 0) {
        return "[ERRO] Porfavor inserte um vetor com números inteiros validos!";
    }

    const isInteger = Array.every(num => Number.isInteger(num));

    if (!isInteger) {
        return "[ERRO] Inserte um vector com números inteiros!"
    }

    let somarValores = 0;
    let count = 0;
    
    for (num of Array) {
        somarValores += num;
        count++;
    }

    return `A média aritmética do vetor [${Array}] é "${somarValores / count}"`; 
}

console.log(mediaAritmetica());
console.log(mediaAritmetica([1, 2, 3, 4, 5]));
console.log(mediaAritmetica([1, 2, 3.4, 4, 5]));

