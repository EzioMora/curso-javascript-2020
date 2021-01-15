// Conhecendo e entendo a estrutura de controle switch que alberga case, break e default

const imprimirResultado = function(nota) {
    switch (Math.floor(nota)) {
        case 10: // Quando o codigo asociado ao caso estiver em branco executara o debaixo devido que não tem o 'break'
        case 9:
            console.log("Quadro de Honra!");
            break; // A pos a execução do codigo do case o break é utilizado para que não sejam executados os cases debaixo.
        case 8: case 7: // Desta forma podemos definir uma para varios casos as mesmas sentencias de codigo
            console.log("Aprovado!");
            break;
        case 6: case 5: case 4:
            console.log("Recuperacao");
            break;
        case 3: case 2: case 1: case 0:
            console.log("Reprovado!");
            break;
        default: // default é definino casa a expresão pasada ao switch não se encontre nos cases
            console.log("Nota Invalida!");
    }
}

imprimirResultado(10);
imprimirResultado(8.9);
imprimirResultado(6.55);
imprimirResultado(2.3);
imprimirResultado(-1);
imprimirResultado(11);