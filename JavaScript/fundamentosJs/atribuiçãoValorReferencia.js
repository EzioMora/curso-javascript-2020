//Entendo a atribuição por valor e por referencia
// A atribuição por valor

let a = 3 // Aqui estamos atribuyendo/almacenando um valor primitivo

let b = a; // Na variavel b estamos fazendo uma copia do dato primitivo almacenado na variavel a
b++ // aqui estamos utilizando um operador de autoatribuição
console.log(a,b); // aqui podemos observar que 'a' sigue almacenado '3' y 'b' '4' porque incrementamos em uno o valor primitivo que copiamos de 'a'

//Isto solo acontece com os valores primitivos;

// B atribuição por referencia

let c = {carro: "Chevrolet"}; // Aqui estamos criando uma variavel 'c' que almacena a direção de um objecto que esta em memoria

let d = c; // Na variavel 'd' estamos almacenando ou melhor dito apontando ao objecto na memoria
// o seja não estamos almacenando o objecto sim, sim não a referencia do mesmo e ele pode ser alterado em qualquer das variaveis e as alterações valem para todas as variaveis que aponta ao objecto na memoria.
d.carro = "Fiat"; // Aqui estamos alterando o valor que tem atribuido o objecto na memoria

console.log(c,d);

let f = [1,2,3,4];

let g = f;
g[0] = 3;
g[4] = 5;

console.log(f,g);

// o mesmo aplica para os Array porque eles também são objectos, o seja não almacenamos o objecto e sim a referencia em memoria do mesmo.
// o mesmo aplica para as funções