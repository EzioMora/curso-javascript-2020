// 23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
// aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
// aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
// "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.



const aproveOrReprove = (codigo = null, notaA = 0, notaB = 0, notaC = 0) => {
    if(codigo != null) {
        const notas = [notaA, notaB, notaC];
        notas.sort((a, b) => b - a);
        const mediaPonderada = ((notas[0] * 4) + (notas[1] * 3) + (notas[2] * 3)) / 10;
        const status = mediaPonderada >= 5 ? "APROVADO!" : "REPROVADO!";
        return `Codigo: ${codigo} - Nota A: ${(notaA).toFixed(2)} - Nota B: ${(notaB).toFixed(2)} - Nota C: ${(notaC).toFixed(2)} - Média: ${mediaPonderada} - Status: ${status}`;
    }

    return "Codigo invalido, intente novamente!";
}

console.log(aproveOrReprove(1234, 7, 3, 10));
console.log(aproveOrReprove(1234, 7, 3));
console.log(aproveOrReprove(1234, 0, 3));
console.log(aproveOrReprove(1234, 0));
console.log(aproveOrReprove(1234));
console.log(aproveOrReprove());




