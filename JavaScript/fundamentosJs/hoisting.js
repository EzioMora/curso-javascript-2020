// Conhecendo um pocou de Hoisting

console.log(`a = ${a}`); // Intentamos o imprimir o valor da variavel 'a' que ainda não foi definida
var a = "Olá Mundo"; // Definimos a variavel a
console.log(`a = ${a}`); // Imprimos o valor da variavel que já foi definida

// Note que no primero console.log() não foi apontado nenhum error e foi printando o valor undefined, porque ao declarar a variavel var acontecou o hosting que é puxar a variavel ao top mas sem o valor que esta sendo atribuido, é como sim fizeremos na linha 1 "var a" e na linha 4 redefinimos a variavel e atribuimos a string , isto só acontece com a variavel var

console.log(`b = ${b}`); // Aqui para nosso programa porque o let não é afeitado pelo hosting imprimindo b is not defined parando nosso programa.
let b = 2; 
