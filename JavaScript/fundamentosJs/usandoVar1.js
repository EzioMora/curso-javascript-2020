// Declarando uma variavel var e entendo o scopo da mesma
{
    {
        {
            {
                var status = "solteiro";
                console.log(status); // Imprimindo dentro do bloco de codigo
            }
        }
    }
}
// Quando se declara uma variavel var no codigo ou dentro de um bloco de codigo que não seja uma function estaremos declarando ela globalmente, assim que podemos chamar ela dentro do bloco de codigo e fora dele

console.log(status); // Imprimindo fora do bloco de codigo

// Declarando uma variavel var dentro do escopo local de uma function
function test() {
    var status2 = "casado";
    console.log(status2); // dentro da mesma podemos sim imprimitar o valor da variavel
}

test();
console.log(status2); // já fora não podemos chamar uma variavel que foi declarada dentro do escopo de uma function, apresentando status2 is not defined.

// obs var tem dois scopos "global" e "local dentro de uma function"
