// 12) Faça um algoritmo que calcule o fatorial de um número.

const calcFactorail = (num = 1) => {
    resultado = 1;
    if (num >= 1) {
        for(let count = 1; count <= num; count++) {
        resultado *= count;
        }
        return resultado;
    }

    if(num == 0) {
        num = 1;
        return calcFactorail(num);
    }

    if(num < 0) {
        return "Numeros negativos não tem factorial!"
    }
}

console.log(calcFactorail());
console.log(calcFactorail(0))
console.log(calcFactorail(5));