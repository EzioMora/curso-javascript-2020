// Conhecendo e entendendo a estrutura de repeticao do while
function getIntRandom(min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}


function repita(valor) {
    do { // do signifca faca/ execute
        valor = getIntRandom(-1, 10);
        console.log(`O número aleatorio gerado é ${valor}`);

    } while (valor != -1); // a pos a execução do bloco de codigo sera feito uma validacao da expresao para ver sim é truthy ou falsy
}

repita(0);

// o do while é pouco utilizado mas geralmente é utilizado quando se quer executar um codigo e dps fazer a validacao da expresao.

console.log("Veja como ao passar o -1 executa a estrutura de repetição")
repita(-1);