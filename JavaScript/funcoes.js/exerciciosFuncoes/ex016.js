// 16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
// como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
// numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
// 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas


const calculadora = (a = 0, operação = "null", b = 0) => {
    switch (operação) {
        case "+":
            return a + b;
            break;
        case "-":
            return a - b;
            break;
        case "*": case "x":
            return a * b;
            break;
        case "/":
            return a / b;
            break;
        default:
            return "[Erro!] Operação inválida!";
    }
}

console.log(calculadora());
console.log(calculadora(2,3));
console.log(calculadora(2,"x"));
console.log(calculadora(2, "+", 3));
console.log(calculadora(2, "-", 3));
console.log(calculadora(4, "*", 2));
console.log(calculadora(5, "x", 5));
console.log(calculadora(10, "/", 2));
