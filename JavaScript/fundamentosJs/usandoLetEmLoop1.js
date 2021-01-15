// Entendo como se comporta uma variavel let nos loops

for (let i = 0 ; i < 10 ; i++) {
    console.log(i);
}

console.log(`i = ${i}`); // Erro! i is not defined

// A variavel let ao ser definida dentro do bloco for só existe dentro do scopo da mesma, nosso console.log não enchega o scopo local do for e sim o global onde o let não esta definido.