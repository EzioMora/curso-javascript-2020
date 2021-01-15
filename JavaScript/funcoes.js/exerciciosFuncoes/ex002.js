// 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo).

const isTriangulo = function (a = 0, b = 0, c = 0) {

    if (b+c > a && a+c > b && a+b > c) {
        console.log(`Cumple as condições matemáticas de existência de um triângulo!`);

        if (b == c && a == c) {
            console.log(`É um trianguo Equilátero!`)
        } 
        
        if (b == c && a !== b || a == c && b !== c || a == b && c !== a){
            console.log(`É um triangulo Isósceles!`)
        }

        if(b !== c && a !== c && a !== b ) {
            console.log(`É um triangulo Escaleno!`)
        }
    } else {
        console.log(`Não cumple as condições matemáticas de existência de um triângulo, tente de novo!`)
    }
}

isTriangulo(8, 5);
isTriangulo(4, 4, 4);
isTriangulo(4, 4, 5);
isTriangulo(4, 5, 6);
isTriangulo();
