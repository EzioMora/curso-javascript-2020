// 37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
// como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
// bem como a soma dos elementos.

const progressaoArit = (n = 1, a1 = 1, r = 0) => {
    for (let i = 0; i < n - 1; i++) {
        let result = i == 0 ? `${i+1}) ${a1}` : `${i+1}) ${a1} + ${r} = ${a1 = a1 + r}`;
        console.log(result);
    }
    return "Fim da execução!";
}

console.log(progressaoArit(5, 2, 3));

const progressaoGeo = (n = 1, a1 = 1, r = 1) => {
    if (r == 0) {
        return "A razão de uma progressão geométrica não pode ser '0'";
    }

    for (let i = 0; i < n - 1; i++) {
        let result = i == 0 ? `${i+1}) ${a1}` : `${i+1}) ${a1} x ${r} = ${a1 = a1 * r}`;
        console.log(result);
    }
    return "Fim da execução!";
}

console.log(progressaoGeo(8, 2, 0));
console.log(progressaoGeo(8, 2, 2));