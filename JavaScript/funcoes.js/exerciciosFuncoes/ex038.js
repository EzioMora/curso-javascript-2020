// 38) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
// ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
// para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.

const numImpar = (inicio = 0, fim = 100) => {
    const fimMaior = fim < inicio ? [inicio , fim] = [fim, inicio] : [inicio , fim] = [inicio , fim];
    const numImpar = [];

    for (inicio ; inicio <= fim ; inicio++) {
        if(inicio % 2 == 1) {
            numImpar.push(inicio);
        }
    }
    return numImpar;
}

console.log(numImpar(50, 60));
console.log(numImpar(60, 50));
