// Conhecendo os Objectos {}
// os objectos são um conjunto de chaves e valores { chave: "valores"}
const prod1 = {}; // declaramos um objecto vacio
prod1.nome = "Celular Ultra Mega"; // Aqui estamos atribuyendo/almacenando uma chave e valor de forma dinamica
prod1.preco = 5000.50;
prod1["Desconto Legal"] = 0.40 // Evitar atributos/chaves com espaços

console.log(prod1);

const prod2 = {
    nome: "Camisa Polo",
    preco: 79.90
} // Aqui declaramos um objeto e atribuimos/almacenamos de forma literal/direta a palavra chave e o valor

console.log(prod2);

//os objectos e Json são um pouco parecidos mas não são a mesma coisa
// Json significa JavaScript Object Notation
// Diferença entre um Json e um Object

'{"nome": "Camisa Polo", "preco": 79.9}'; // os atributos de Json são delimitados por ""
// Json é um formato textual e objectos é uma coleção de pares chave: valor
//obs apartir de um objecto pode ser gerado um Json
// o seja Json é texto