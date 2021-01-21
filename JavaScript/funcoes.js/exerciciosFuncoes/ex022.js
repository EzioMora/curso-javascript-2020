// 22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
// parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
// anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
// compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.


const calcAnuidade = (mes = "null", anuidade = "null") => {
    const jurosPorAtrasso = anuidade * ( (1 + (5 / 100) )** mes);
    if(mes == 1 && anuidade != "null") {
        return `O valor da anuidade é R$ ${(anuidade).toFixed(2)}`;
    }
    
    if (mes > 1 && anuidade != "null") {
        return `O valor da anuidade é R$ ${(jurosPorAtrasso).toFixed(2)}`;
    }

    return "[ERRO!] Dados invalidos!";
}

console.log(calcAnuidade());
console.log(calcAnuidade(1));
console.log(calcAnuidade(1, 200));
console.log(calcAnuidade(5, 200));

