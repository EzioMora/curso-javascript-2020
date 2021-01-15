// criando um cadastro simple de produto com factory

const listaDeProductos = [];

const addProdut = function (nomeProd , priceProd) {
    return listaDeProductos.push({
        produto : nomeProd,
        preco : priceProd
    })
}

addProdut("Leite", 4.30);
addProdut("Farofa", 3.20);
console.log(listaDeProductos);