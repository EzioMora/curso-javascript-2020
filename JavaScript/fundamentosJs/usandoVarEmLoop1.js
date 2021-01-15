// Entendo como se comporta uma variavel var nos loops
for (var i = 0 ; i < 10 ; i++) {
    console.log(i);
}

console.log(`i = ${i}`);

// A variavel var não tem scopo de boco então ele ignora o bloco de for e ela é definida como varaivel global podendo imprimir ela fora do bloco for
