// Aplicando destructuring como parametro de uma função
function numberRamdom({ min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

const obj = {
    min: 50,
    max: 100
}
console.log(numberRamdom(obj));
console.log(numberRamdom({min: 955}));
console.log(numberRamdom({}));
// console.log(numberRamdom()) //Aqui teremos o error min is not defined porque em nossa function definimos um destructuring de um objecto, o seja a function esta aguardando que passemos um objecto para destructurar os atributos min e max, o objecto pode estar vacio como na linha 12 porque predefinimos .