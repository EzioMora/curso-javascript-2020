// A função factory é uma função que retorna um objecto

// factory simples

function criarPessoa() {
    return {
        nome: "Ana",
        sobrenome: "Silva"
    }
}

console.log(criarPessoa());