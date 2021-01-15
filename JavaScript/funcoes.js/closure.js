// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variaveis/const externas a função

// Contexto léxico/escopo em ação! 

// Contexto léxico/Escopo Global
const x = "Global";

function fora() {  // Contexto léxico/Escopo local 1
    const x = "local";
    function dentro() { // Contexto léxico/Escopo local 2
        return x;
    }
    return dentro;
}

const minhaFuncao = fora(); // vai almacenar a função dentro porque é o que retorna a função.
console.log(minhaFuncao());