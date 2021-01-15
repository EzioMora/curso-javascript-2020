let num1 = 1;
let num2 = 2;

num1++; // operador de incremento pos-fixado
console.log(num1);
--num1; // operador de decremento pre=fixado
console.log(num1);

console.log(++num1 === num2--); /* observe a importancia da ordem do operador, em num1 estamos
                                   fazendo o incremento antes da comparacao e num2 fara o 
                                   decremento apos a comparacao, trazendo como resultado true*/
console.log(num1 === num2); // Aqui retornara true porque a comparacao esta sendo feita apos o incremento e decremento

