// 17) Um funcionário irá receber um aumento de acordo com o seu plano de
// trabalho, de acordo com a tabela abaixo:
// Plano | Aumento
// A  | 10%
// B  | 15%
// C  | 20%
// Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
// novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.


const aumentoSalarial = (plano = "undefined", salarioAtual = 0) => {
    switch (plano.toLowerCase()) {
        case "plano a": case "a":
            return `Novo salário: R$ ${(salarioAtual * 1.10).toFixed(2)}`;
            break;
        case "plano b": case "b":
            return `Novo salário: R$ ${(salarioAtual * 1.15).toFixed(2)}`;
            break;
        case "plano c": case "c":
            return `Novo salário: R$ ${(salarioAtual * 1.20).toFixed(2)}`;
            break;
        default:
            return "[ERRO!] Plano invalido!";
    }
}
console.log(aumentoSalarial());
console.log(aumentoSalarial("plano a", 1100));
console.log(aumentoSalarial("A", 1500));
console.log(aumentoSalarial("plano b", 2543));
console.log(aumentoSalarial("b", 1300));
console.log(aumentoSalarial("plano c", 3450));
console.log(aumentoSalarial("C", 800));
console.log(aumentoSalarial("D", 800));


