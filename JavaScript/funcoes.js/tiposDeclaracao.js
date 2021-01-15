// tipos de declarar uma function


// diferença peculiar entre as 3 declarações
console.log(soma(3,4)); // mesmo que ainda não foi definida a função vai printar o resultado
                        // isto porque não hora de carregar o documento ele carrega primeiro as
                        // function expression
console.log(sob(3,4)); // isto no aplica para as function expression
console.log(divisao(3,4)); // nem pra named function expression


// function declaration/tradicional
// são aquelas que são declaradas com a palavra reservada function e o identificador

function soma(x, y) {
    return x + y;
}

// function expression
// são function anonimas que são almacenada em variaveis/constantes

const sob = function(x, y) {
    return x - y;
}

const multi = (x, y) => x * y;

// named function expression
// mistura a function declaration com expression

const divisao = function divisao(x, y) {
    return x / y;
}

// este tipo de função é pouco usada, o benefico que ela tem é na hora de debugar 
// caso for de interesse aprofundar un pouco mais em que pode beneficar na hora de debugar
// mas via de regra ela não é muito utilizada.