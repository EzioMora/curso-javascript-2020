// Entendo a diferença de uma function tracional a uma arrow

// Function tradicional
let dobro = function (a) {
    return a * 2;
}

// function arrow
dobro = (a) => { // se for só um parametro pode ser omitido os ()
    return a * 2;
}

// function arrow com return implicito
dobro = a => a * 2;

console.log(dobro(Math.PI));
// Obs. Todas as function arrow são anonimas, para chamar elas é necesario atribur elas a uma 
// variavel

let ola = function () {
    return "Olá!";
}

ola = () => "Olá";

console.log(ola());