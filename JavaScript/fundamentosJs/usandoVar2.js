// aprofundando um pouco no scopo do var

var numero = 1;
{
    var numero = 2; // var ignora todos os blocos de codigos menos o da function e támbem var pode ser redefina sem nenhum problema, com let e const isto não acontece.
    console.log(`Dentro = ${numero}`); // Imprimira 2 porque reescrevemos a variavel e atribuimos um novo valor.
}
console.log(`Fuera = ${numero}`); // como assima dito reescremos a variavel então sempre sera 2

//Entendendo os 2 tipos de Scopo da variavel var

var numero2 = 2; //Declaramos uma variavel var no scopo global

function printResult() {
    var numero2 = 3; //Declaramos uma variavel var no scopo local da function
    console.log(`Dentro = ${numero2}`); // o console.log() printara a variavel que esta definida dentro do scopo da function, em caso de ela não ser definida dentro imprimira a global sim existir
}

printResult();
console.log(`Fuera = ${numero2}`); // aqui printaremos a variavel que esta no scopo global, porque a variavel que esta dentro da function só existe dentro da function.

// obs. Uma coisa é redefinar uma variavel ex. "var numero2 = 3;" e outra coisa diferente é atribuir um novo valor em uma variavel já definda ex "numero = 4;"