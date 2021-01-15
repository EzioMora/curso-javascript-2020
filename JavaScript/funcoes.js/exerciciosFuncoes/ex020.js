// 20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
// para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
// Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
// informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
// nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.


const banco24Horas = (valorSolicitado = "Undefined") => {

    let notasNoCaixa = [100, 50, 10, 5, 1];
    let notasDeSaida = [];

    // notas a serem utilizadas
    for (let count = 0 ; valorSolicitado != 0 ; count++) {
        if ((valorSolicitado - notasNoCaixa[count]) >= 0) {
            valorSolicitado -= notasNoCaixa[count];
            notasDeSaida.push(notasNoCaixa[count]);
            count -= 1;
        }
    }

    // quantidade de notas a serem utilizadas
    let notDuplicate = new Set(notasDeSaida);
        notDuplicate = [...notDuplicate];
    let count = 0;
    let entregarCelulas = [];

    for(let i = 0; i < notDuplicate.length ; i++) {
        let isRepeat = notDuplicate[i];
        count = 1;
        for(let ii = i + 1 ; ii < notasDeSaida.length; ii++) {
            if(isRepeat == notasDeSaida[ii]) {
                count += 1;
            }
        }
        entregarCelulas.push({celula: notDuplicate[i], quantidade: count})
    }

    // o texto a ser retornado para o usuario.
    let celulasSaida = "";
    for (let i = 0; i < entregarCelulas.length; i++) {
        celulasSaida += `${entregarCelulas[i].quantidade} nota(s) de R$ `
        celulasSaida += `${entregarCelulas[i].celula}. `
    }
    return celulasSaida;
}
    


console.log(banco24Horas(120))
console.log(banco24Horas(165))
