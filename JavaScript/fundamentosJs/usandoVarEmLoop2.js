// Entendo um problema historio do JavaScript sobre a variavel Var

const funcs = []; // Definimos uma array vacia.

for (var i = 0; i < 10 ; i++) { // iniciamos nosso for
    funcs.push(function() { // aplicamos a função/metodo .push para adicionar dentro de nossa array uma function anonima
        console.log(i); 
    })
}

funcs[2](); // aqui estamos fazendo o chamado ao elemento em nosso indece 2 e chamando a função anonima
funcs[8](); // igualmente

// Teremos como resultado 10 e 10 isto acontece porque a variavel var ignora o scopo do for e vai incrementando o valor dela globalmente
// ao momento de chamar as funções o console.log(i) vai pegar exactamente o valor que tem almacenao na variavel globa trascendo como resultado 10 e 10