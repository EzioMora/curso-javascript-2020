//Entendo como funciona o scopo do let
// o let tem 3 scopos: global, local de function e local de bloco de codigo
var numero = 1; // variavel definida em scopo global
{
    let numero = 2; // variavel definida em scopo local
    console.log(`Dentro = ${numero}`);
}
console.log(`Fuera = ${numero}`);
// Aqui podemos observar que printo 2 valores diferentes mas tem o mesmo nome de variavel, elas podem convivir porque estão em scopos diferentes

let numero2 = 3; // variavel definida em scopo global
{
    let numero2 = 2; // variavel definida em scopo local
    console.log(`Dentro = ${numero2}`);
}
console.log(`Fuera = ${numero2}`);

//obs sobre o let que vale para o const

let numero3 = 22; // definimos a variavel

console.log(numero3) // printamos o valor

let numero3 = 14; // redefiniendo a variavel

console.log(numero3); // aqui nos apresentara um error porque no let e const não pode ser redefinido. 
//obs. no let o que pode ser feito é atribuir um novo valor em uma variavel já definida, no const isto não é possivel porque ao ser definida a variavel e o valor vira uma valor constante e valores constantes não podem ser alterados.