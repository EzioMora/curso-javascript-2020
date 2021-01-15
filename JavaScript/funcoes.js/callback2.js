// Conhecendo e entendendo a função callback .filter()
// a função filter só retorna um parametro que seria o elemento

const notas = [7.3, 5.3, 4.5, 8.9, 9.0, 6,9];

// filtrando elementos de uma array sem callback
const notaMenor1 = [];

for (let i in notas) {
    if(notas[i] < 7) {
        notaMenor1.push(notas[i]);
    }
}

console.log(notaMenor1);

// filtrando elementos de uma array com callback

const notaMenor2 = notas.filter(function (nota) {
    return nota < 7;
});

console.log(notaMenor2);

// filtrando elementos de uma array com callback e arrow

const notaMenor3 = notas.filter(nota => nota < 7);

console.log(notaMenor3);

// outra maneira com função reutilizavel 

const menorQue7 = nota => nota < 7;

const notaMenor4 = notas.filter(menorQue7);

console.log(notaMenor4);
