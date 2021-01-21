// 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
const parEImpar = (Array) => {
    let par = [];
    let impar = [];

    for (num of Array) {
        if (Number.isInteger(num / 2)) {
            par.push(num);
        } else {
            impar.push(num);
        }
    }

    if (par.length > 0) {
        console.log(par);
    } else {
        console.log("Não foram encontrados números pares");
    }

    if (impar.length > 0 ) {
        console.log(impar);
    } else {
        console.log("Não foram encontrados números impares");
    }
}

parEImpar([1,2,3,4,5,6,7,8,9,10])