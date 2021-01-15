// Aprofundado no comportamento do this na function arrow

// Dunction tradicional
let comparaComThis = function (param) {
    let idade = 0;
    console.log(this === param);
}

comparaComThis(global); // ao chamar a função no contexto global o this almacenado faz referencia ao objecto global/window
comparaComThis(this); // o this não é this

const obj = {};

comparaComThis = comparaComThis.bind(obj); // com .bind() definimos ao contexto que this faz referencia neste caso ao obj
comparaComThis(global); // como esta fazendo referencia ao obj não é igual que o objecto global
comparaComThis(obj); // como o this esta apontando ao obj é true

// function arrow
// como as arrow são anonimas para ser chamadas tem que ser almacenadas em uma variavel/const
let comparaComThisArrow = param => console.log(this === param); // ao almacenar a arrow
// dentro da varaivel o this sera amarrado ao mesmo contexto apontando a variavel
// e no podra variar

comparaComThisArrow(global); // false o this a ponta a variavel comparaComThisArrow
comparaComThisArrow(module.exports); // true o comparaComThisArrow pode ser considerado um modulo

comparaComThisArrow = comparaComThisArrow.bind(obj); // apontando o this com bind ao obj
comparaComThisArrow(obj); // false, o this que esta dentro da arrow não pode ser alterado
                          // e sempre apontara pra variavel.