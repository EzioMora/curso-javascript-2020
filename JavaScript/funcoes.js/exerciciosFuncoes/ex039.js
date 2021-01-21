// 39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
// primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
// Faça a troca sem utilizar uma variável auxiliar.

const invertirVetor = (Array1 = [], Array2 = []) => {
    if(Array1.length == Array2.length) {
        [Array1, Array2] = [Array2, Array1];
        console.log(Array1, Array2);
    }

    if(Array1.length != Array2.length) {
        return "Abortando execução os vetores são de diferente tamanho!";
    }
    return "Fim da Execução!";
}

console.log(invertirVetor([1, 2, 3], [4, 5, 6]));
console.log(invertirVetor([4, 5, 6], [1, 2, 3]));

