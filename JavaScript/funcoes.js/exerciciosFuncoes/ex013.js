// 13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
// dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.

const diaValido = (dia = 0) => {
    switch(dia) {
        case 2: case 3: case 4: case 5: case 6:
            return "Dia útil!";
            break;
        case 1: case 7:
            return "Fim de semana!";
            break;
        default:
            return "Dia inválido";
    }
}
console.log(diaValido());
console.log(diaValido(0));
console.log(diaValido(1));
console.log(diaValido(2));
console.log(diaValido(3));
console.log(diaValido(4));
console.log(diaValido(5));
console.log(diaValido(6));
console.log(diaValido(7));
console.log(diaValido(8));

