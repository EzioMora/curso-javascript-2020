// Aprofundado um pouco em parametros variaveis e a utilização do arguments de uma funtion

function soma() {

    let soma = 0;

    for (let i in arguments) { // arguments é uma array que almacena os dados passados pra function
        soma += arguments[i];
    }
    
    return soma
}

console.log(soma(1));
console.log(soma());
console.log(soma(1, 2, 3, 4, 5.5, 6.7));

console.log(soma(1, 2, "Teste"));
console.log(soma("a", "b", "c"));