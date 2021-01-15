// Entendo o if else

const imprimirResultado = function(nota) {
    if(nota >=7) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }
}

imprimirResultado(6);
imprimirResultado(8);
imprimirResultado("Epa!"); // cuidado ao enviar um tipo de dado prmitivo diferente do esperado, ele vai ser comparado com o número e retornara false o que executara o bloco do else printando "Reprovado".

//Pode ser feito uma valição do tipo de dato para evitar essa flexibilidade do tipado fraco do Js.
