// Função sem retorno

function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3); // resultado 5
imprimirSoma(2); // Aqui como foi passado só um parametro teremos NaN porque o parametro 'b' não foi definido então por padrão sera undefined e todo número somado com undefined retorna NaN podemos evitar isto deixando um valor por defaul caso não passemos um 2do parametro

imprimirSoma(2, 3, 5, 7, 8, 10); // aqui estamos passando varios valores só que temos 2 parametros definidos na função neste caso sera atribuido os 2 primeros e o resto sera ignorado

imprimirSoma(); // al não passar nenhum valor pra os parametros estos seram undefined retornando NaN

// função com retorno

function soma(a, b = 1) {
    return a + b;
}

console.log(soma(2, 3)); // Atraves do console.log faremos o chamado da função e ista retornara o valor da operação e sera printado
console.log(soma(2)); // Aqui passamos só um valor e na execução da operação sera utilizado o valor pre definido 1, retornando '3';
console.log(soma()); // como não foi passado nenhum valor e em não pre definimos um valor para nosso parametro 'a' nos retornara NaN, para evitar isto temos que pre definar um valor ao parametro 'a'