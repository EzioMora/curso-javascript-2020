// 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
// e o resto da divisão destes dois valores.

const resultAndRest = (dividendo = 1, divisor = 1) => {
    console.log(`Resultado = ${dividendo / divisor}`);
    console.log(`Resto = ${dividendo % divisor}`);
}

resultAndRest();
resultAndRest(5);
resultAndRest(2, 1);
resultAndRest(2, 3);
resultAndRest(4, 2);
resultAndRest(5, 2);
resultAndRest(10, 4);
resultAndRest(30, 7)