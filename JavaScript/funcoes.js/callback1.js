// conhecendo a função/metodo forEach que faz um callback

const fabricantes = ["Mercedes", "Audi", "BWM"];

function printMake(nome, indice) {
    console.log(`${indice}. ${nome}`);
}

// A função forEach percorre a Array e ao encontrar um elemento ele faz um chamado neste caso a nossa
// funcão printMake passando 2 parametros o primero é o elemento e o segundo o indice

fabricantes.forEach(printMake); // forEach passando ambos parametros
fabricantes.forEach(function (a) { // aqui nossa função literal só tem um parametro então
    console.log(a);                // recebe o primero que é o elemento
})
fabricantes.forEach(a => console.log(a)); // function arrow literal