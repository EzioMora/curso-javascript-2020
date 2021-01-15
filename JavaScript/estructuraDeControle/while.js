// Conhecendo e entendendo a estrutura de repeticao/laço while

const getIntRandom = function(min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);  
}

let valor = 0;

while (valor != -1) {
    valor = getIntRandom(-1, 10);
    console.log(`O valor aleatorio é ${valor}.`);
}

console.log("Até a proxima!")
// A estrutura de repetição sera executara até a expresõa ser falsy