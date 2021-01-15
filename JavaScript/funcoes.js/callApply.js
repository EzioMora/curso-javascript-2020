const getPreco = function (imposto = 0, moeda = "R$") {
    return `$${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)} `
}

const produto = {
    nome: "Notebook",
    preco: 4590,
    desc: 0.15,
    getPreco
}

global.preco = 20;
global.desc = 0.1;
console.log(getPreco()); // ao chamar o metodo no contexto global, o this a ponta ao objecto global
                         // e no mesmo definimos 2 variaveis globais que o this pode localizar
                         // sim comentamos a linha 12 e 13 não daria um error mas não retorna nada
console.log(produto.getPreco()); // ao chamar o metodo atraves do objecto produto o this
                                 // a ponta ao contexto léxico onde foi chamado que é produto

// utilizando o metodo .call() 

const carro = {preco: 49990, desc: 0.20}

// ambos metodos fazem a mesma função
console.log(getPreco.call(carro)); // chamando a função getPreco e passando o contexto/escopo do elemento para execução
console.log(getPreco.apply(carro)); // igualmente

// diferença entre call e apply
console.log(getPreco.call(carro, 0.17, "$")); // ao chamar a função passo o (elemento, param a, param b)
console.log(getPreco.apply(carro, [0.17, "$"])); // ao chamar a função passo o (elemento, [param a, paramb])

// A diferença é que ao utilizar o metodo .apply() os parametros são passados dentro de uma Array
 