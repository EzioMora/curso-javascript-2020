// Conhecendo e entendendo for in
const notas = [6.7, 8.1, 9.5, 2.3];

// Navegando nos elementos de uma array;
for (let i in notas) {
    console.log(`Notas = ${notas[i]}`);
}

// Obs. tem formas melhores de percorrer um array, com for each, map, reduce, filter e entre outros

const usuario = {
    nome: "Carlos",
    idade: 14,
    sexo: "Masculino",
    peso: 64
}

// Navegando nos atributos de um object
for (let atributo in usuario) {
    console.log(`${atributo} = ${usuario[atributo]}`);

}