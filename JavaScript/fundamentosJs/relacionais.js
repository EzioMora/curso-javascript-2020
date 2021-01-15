// Entendo os operadores relacionais

console.log(`1) ${ '1' == 1 }`); // o '==' igual que, só compara o valor e ignora o tipo de dado, aqui temos uma string e um number
console.log(`2) ${ '1' === 1 }`); // o '===' compara sim o valor e tipo de dado são iguais.
console.log(`3) ${ '3' != 3 }`); // o '!=' serve para saber sim os valores são diferentes e ignora o tipo de dado.
console.log(`4) ${ '3' !== 3 }`); // o '!==' compara sim o valor e tipo de dado são diferentes.

console.log(`5) ${ 3 < 2}`); // '>' Mayor que
console.log(`6) ${ 3 > 2}`); // '<' Menor que
console.log(`7) ${ 3 <= 2}`); // '>=' Mayor ou igua que
console.log(`8) ${ 3 >= 2}`); // '<=' Menor o igual que

const d1 = new Date(); // almacenamos a referencia que o construtor nos da de 'Date'
const d2 = new Date(); 
console.log(`9) ${ d1 == d2}`); 
console.log(`10) ${ d1 === d2}`);
console.log(`10) ${ d1.getTime() === d2.getTime()}`);

console.log(undefined == null); // são iguais porque tem como valor false e ignoramos o tipo de dado
console.log(undefined === null); // undefined e null tem o mesmo valor mas não o mesmo tipo.









