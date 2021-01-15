// Função em JS é First-Class Object (Citizens)
// Higher-order function

// Criação de uma funtion literal
function fun1() { }

// Armazenar uma funtion em uma variavel/constante

const fun2 = function () { }

// Armazenar uma function dentro de uma Array
// [0]function literal, [1]function literal global, [2]funtion armazenada em uma constante
const array = [function (a, b) { return a + b }, fun1, fun2];
console.log(array[0](2, 3));

// Function armazenada em um atributo de um Object

const obs = {}

obs.falar = function () { console.log("Epa!") }

console.log(obs.falar());

// Passar função como parametro

function run(fun){
    fun();
}

run(function() {console.log("Executando...")});

// uma função pode retornar/conter uma função

function soma(a, b) {
    return function (c) {
        console.log(a + b + c);
    }
}

soma(2, 3)(4); // ao passar os parametros (2, 3) vai ser retornado uma function anonima e pasaremos um parametro (4) para a mesma e printara a soma dos 3 parametros

const cincoMais = soma(2, 3); // desta forma podemos ver a function anonima sendo retornada
console.log(cincoMais);
cincoMais(4); // aqui pasamos o parametro para a function anonima