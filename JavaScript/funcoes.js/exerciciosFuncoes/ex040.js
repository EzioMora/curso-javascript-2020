// 40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
// modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
// conceito B e de 9,0 a 10,0 o conceito A.

const atribuirConceito = (Array = []) => {
    let newArray = [];

    if (Array.length == 0) {
        return "[ERRO] Informe um vetor de notas valido!";
    }

    for (nota of Array) {
        if (nota < 5) {
            newArray.push("Nota D: 0,0 a 4,9");
        }

        if (nota >= 5 && nota < 7) {
            newArray.push("Nota C: 5,0 a 6,9");
        }

        if (nota >= 7 && nota < 9) {
            newArray.push("Nota B: 7,0 a 8,9");
        }
        
        if (nota >= 9 && nota <= 10) {
            newArray.push("Nota A: 9,0 a 10,0");
        }
    }
    return Array = newArray;
}

console.log(atribuirConceito());
console.log(atribuirConceito([]));
console.log(atribuirConceito([4, 5, 7, 8, 9, 10, 12, 12]));
console.log(atribuirConceito([5]));
console.log(atribuirConceito([8]));
console.log(atribuirConceito([9]));


