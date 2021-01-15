// 18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
// switch. Crie um case default que escreva ‘Número fora do intervalo.’


const printNumber = (numTxt = "undefined") => {
    let textFormt = numTxt.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    switch (textFormt) {
        case "zero":
            return 0;
            break;
        case "um":
            return 1;
            break;
        case "dois":
            return 2;
            break;
        case "tres":
            return 3;
            break;
        case "quatro":
            return 4;
            break;
        case "cinco":
            return 5;
            break;
        case "seis":
            return 6;
            break;
        case "sete":
            return 7;
            break;
        case "oito":
            return 8;
            break;
        case "nove":
            return 9;
            break;
        case "dez":
            return 10;
            break;
        default:
            return "Número fora do intervalo"
    }
}

console.log(printNumber());
console.log(printNumber("ZERO"));
console.log(printNumber("UM"));
console.log(printNumber("Dois"));
console.log(printNumber("três"));
console.log(printNumber("quaTro"));
console.log(printNumber("cinCO"));
console.log(printNumber("SeIS"));
console.log(printNumber("sete"));
console.log(printNumber("oito"));
console.log(printNumber("nove"));
console.log(printNumber("deZ"));

