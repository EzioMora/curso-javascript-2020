function numberRamdom([min = 0, max = 1000]) { // Definimos uma function que contem              como parametro um operador destructuring de Array com valores default
    if (min > max) { 
        [min, max] = [max, min]; // sim o min for maior que max invertiremos os valores.
    }

    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(numberRamdom([50, 40])); // Fazemos o chamado da função passando um array de dos elementos
console.log(numberRamdom([992])); // Fazemos o chamado da função passando um array com um parametro
console.log(numberRamdom([,10])); // Aqui fazemos o chamado da função passando o 2do elemeto da array
console.log(numberRamdom([])); // fazemos o chamado da função passando uma array em branco
console.log(numberRamdom()) // teremos um erro porque definimos como parametro um destructurin de tipo array, o seja esta aguardando uma arraym mesmo seja em branco.