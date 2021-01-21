// 36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
// inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
// elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
// o valor do elemento for maior que 5.

const funcao1 = (Array, num) => {
    let newVetor = [];
    for (element of Array) {
        newVetor.push(element * num);
    }
    return num > 5 ? funcao2(newVetor, num) : newVetor;
}

function funcao2 (newArray, num) {
    let newVetor = [];
    for (element of newArray) {
        newVetor.push(element * num);
    }
    return newVetor;
}

console.log(funcao1([1,2,3,4], 2));
console.log(funcao1([1,2,3,4], 6));
