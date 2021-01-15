// funções anonimas 

const soma = function (x, y) {
    return x + y;
}

const printResult = function (a, b, operacao = soma) {
    console.log(operacao(a, b));
}

printResult(3, 4); // passamos o parametro 'a' e 'b' o 'operacao' tem como valor padrão a função soma
printResult(3, 4, soma); // aqui passaamos os 3 parametros sendo o 3ero a funcão soma
printResult(3, 4, function (x, y) { // aqui passamos no 3ero valor uma function literal
    return x - y;
});
printResult(3, 4, (x, y) => x * y); // y aqui uma arrow literal
