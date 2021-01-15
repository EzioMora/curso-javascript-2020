//Conhecendo e entendendo Null and Undefined 
let valor // Variavel não inicializada
console.log(valor);
//Nos retonar undefined porque não foi definido um valor para a variavel o que significa que é indefinida;
// console.log(valor2);
// Aqui nos retorno que valor2 is not defined porque esta variavel no fue definida

//Adiferença entre undefined e not defined é que em undefined a variavel existe mas o valor não foi definido
// not defined é que a variavel em sim não esta definida o seja não existe.

valor = null; // Aqui estamos atribuindo um valo na variavel só que o "null" é ausencia de valor

// Dica caso vc queira zerar o valor de uma variavel e deixar assim obte pelo "null" ao inves de undefined porque vc em principio definido a variavel.

// console.log(valor.toString()) al utilizar metodos em uma variavel que é nula vai gerar um erro porque esta nula não contem nenhum atributo para ser chamado.

console.log(valor);

const produto = {};

console.log(produto.preco); // Nos retorna undefined porque dentro de produto na chave preco não tem o valor, como bem dito um objecto é um conjunto de pares chave: valor como 'preco' não tem atribudio valor não sera adicionado no objecto.
console.log(produto) // Aqui podemos apreciarlo

produto.preco = 3.5; 
console.log(produto)

produto.preco = undefined // Evite atribuir undefined explicitamente é melhor deixar a linguagem definir o que é undefined

console.log(!!produto.preco); // valores undefined são false
// delete produto.preco // neste caso nos objects o comando delete elimina o atributo/chave e o valor do mesmo e não deixa um elemento em branco como nos Arrays

console.log(produto); 

produto.preco = null // sem preço, é interessante utilizar o valo null em casos especificos, exemplo, um ebook gratuido tera como preço '0', mas se vc quiser deixar um produto sem preço nenhum o idea seria utilizar o 'null' ou '-1' o melhor seria 'null' e nunca utilizar undefined.

console.log(!!produto.preco) // valores null são false

console.log(produto);