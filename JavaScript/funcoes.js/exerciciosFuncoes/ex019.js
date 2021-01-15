// 19) O cardápio de uma lanchonete é o seguinte:
// Código | Descrição do Produto | Preço
// 100 | Cachorro Quente | R$ 3,00
// 200 | Hambúrguer Simples | R$ 4,00
// 300 | Cheeseburguer | R$ 5,50
// 400 | Bauru | R$ 7,50
// 500 | Refrigerante | R$ 3,50
// 600 | Suco | R$ 2,80
// Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
// a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
// comando switch. Crie um caso default para produto não existente.

const caixa = (codigo = "undefined", quantidade = 1) => {
    switch (codigo) {
        case 100:
            return `${codigo} Cahorro Quente x ${quantidade} ... R$ ${(quantidade * 3).toFixed(2).replace(".", ",")}`;
            break;
        case 200:
            return `${codigo} Hambúrguer Simples x ${quantidade} ... R$ ${(quantidade * 4).toFixed(2).replace(".", ",")}`;
            break;
        case 300:
            return `${codigo} Cheeseburguer x ${quantidade} ... R$ ${(quantidade * 5.5).toFixed(2).replace(".", ",")}`;
            break;
        case 400:
            return `${codigo} Bauru x ${quantidade} ... R$ ${(quantidade * 7.5).toFixed(2).replace(".", ",")}`;
            break;
        case 500:
            return `${codigo} Refrigerante x ${quantidade} ... R$ ${(quantidade * 3.5).toFixed(2).replace(".", ",")}`;
            break;
        case 600:
            return `${codigo} Suco x ${quantidade} ... R$ ${(quantidade * 2.8).toFixed(2).replace(".", ",")}`;
            break;
        default:
            return "Produto não existe";
    }
}

console.log(caixaV1());
console.log(caixaV1(100, 2));
console.log(caixaV1(200, 5));
console.log(caixaV1(300, 1));
console.log(caixaV1(400, 2));
console.log(caixaV1(500, 4));
console.log(caixaV1(600));

