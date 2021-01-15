// Entendendo que parametros e returns são opcionais

function area(largura, altura) {
    const area = largura * altura;
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`);
    } else {
        return area;
    }
}

console.log(area(2, 2)); // retorna 4
console.log(area(2)); // retorna NaN um número multiplicado por undefine é NaN
console.log(area()); // undefined * undefined é NaN
console.log(area(2, 3, 17, 4, 5)); // Aqui passamos varios valores mas a function só tem 2 parametros então ignora os demais valor dps do 3
console.log(area(5,5)); // Aqui retorna undefined porque na execução do bloco if não temos retorno, quando uma function não tem retorno ela retorna ao chamado undefined    
