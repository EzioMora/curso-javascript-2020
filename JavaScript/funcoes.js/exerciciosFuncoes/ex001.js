// 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.

const printResults = (a = 1, b = 1) => {
    console.log("----------------")
    console.log(`1) ${a} + ${b} = ${a + b}`);
    console.log(`2) ${a} - ${b} = ${a - b}`);
    console.log(`3) ${a} x ${b} = ${a * b}`);
    console.log(`4) ${a} / ${b} = ${a/ b}`);
    console.log("----------------")

}

printResults();
printResults(2)
printResults(15,2);