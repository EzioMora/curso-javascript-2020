// Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.

const jurosSimples = (capital = 1, juros = 0.99, tempo = 1) => {
    const jurosSimples = capital * (juros / 100) * tempo;
    const montante = capital + jurosSimples;
    return montante;
}

const jurosCompostos = (capital = 1, juros = 0.00, tempo = 1) => {
    const montante = capital * ( (1 + (juros / 100) )** tempo);
    return montante;
}
console.log(jurosSimples(1000, 0.66, 12));

console.log(jurosCompostos(1000, 0.66, 12));


