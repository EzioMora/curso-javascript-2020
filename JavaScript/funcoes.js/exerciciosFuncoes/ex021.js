// 21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
// considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
// de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
// idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130

const planoSaude = (idade = "null") => {
    const valorBase = 100;

    if(idade < 10) {
        return `O valor do plano é R$ ${(valorBase + 80).toFixed(2)}`;
    }

    if(idade >= 10 && idade <= 30) {
        return `O valor do plano é R$ ${(valorBase + 50).toFixed(2)}`;
    }

    if(idade > 30 && idade <= 60) {
        return `O valor do plano é R$ ${(valorBase + 95).toFixed(2)}`;
    }

    if(idade > 60) {
        return `O valor do plano é R$ ${(valorBase + 130).toFixed(2)}`;
    }

    return "[ERRO] Número invalido!";
}

console.log(planoSaude());
console.log(planoSaude("dez"));
console.log(planoSaude(9));
console.log(planoSaude(10));
console.log(planoSaude(15));
console.log(planoSaude(30));
console.log(planoSaude(31));
console.log(planoSaude(60));
console.log(planoSaude(61));




