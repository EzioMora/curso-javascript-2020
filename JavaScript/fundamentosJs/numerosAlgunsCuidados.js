console.log(7 / 0); // todo número divido por 0 é infinito
console.log("10.3" / 2); // é posiivel divir ou multiplicar um número que é de tipo string, sempre e cuando ele seja inteiro, sim for real/flutuante não sera possivel a menos que seja representado com . e não ,
console.log('3' + 2); // aqui teremos uma concatenação porque o + nas string é utilizado para concatenar
console.log("3" - 2); // aqui teremos a resta porque o - não faz sentido nas regras de strings
console.log("show!" * 2); // ao multiplicar um texto teremos um NaN
console.log(0.1 + 0.7); // aprofundar
// console.log(10.toString()); neste codigo teremos um erro porque não pode ser aplicado o metodo em um valor literario direto.
console.log((10).toString()); // aqui sim porque estamos colocando o valor literario em () o que torna o metodo valido.
console.log((10.345).toFixed(2)); // aqui estamos determinando que solo queremos 2 casas decimales.