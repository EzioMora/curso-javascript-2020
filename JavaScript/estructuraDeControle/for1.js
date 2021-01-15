// Conhecendo a estrutura de repetição for 

// contador com while
let contador = 1;

while (contador <= 10) {
    console.log(`Contador = ${contador}`);
    contador++
}

// contador com for
for (let i = 0; i <= 10; i++) {
    console.log(`i = ${i}`);
}

// navegando dentro de uma array com a estrutura de repetição for
const notas = [6.2, 3.5, 4.5, 9.8];

for (let i = 0; i < notas.length; i++) {
    console.log(`Notas = ${notas[i]}`);
}