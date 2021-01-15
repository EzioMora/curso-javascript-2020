// Armazenando uma função em uma variavel / constante

const imprimitSoma = function (a, b) {
    console.log(a + b);
}

imprimitSoma(2, 3);
console.log(imprimitSoma);

// Armazenando uma função arrow em uma variavel / constante

let soma = (a, b) => {
    return a + b;
}

console.log(soma(2, 3));

// Armazenando uma função arrow com retorno implicto em uma variavel / constante

const subtracao = (a, b) => a = b;

console.log(subtracao(2, 3))