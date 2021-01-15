// Operador destructurin em Array
const [a] = [10]; // A [a] representa o indice 0 que no array seria o valor '10'
console.log(a);

const [n1,, n3,,n5,n6 = 0] = [10,7,9,8]; /*Pulamos o indice 1 de valor '7' e indice 3 de valor '8' e criamos o indice 6 de valor '0'*/

console.log(n1,n3,n5,n6);
const [, [, nota]] = [[,8,8], [9,6,8]]
console.log(nota);

const numeros = [1,,2,3];

const [ num1,,num3,num4 ] = numeros;
console.log(num1,num3,num4);