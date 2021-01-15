// Entendo o Template String
const nome = "Barbara";
const concatenacao = "Olá " + nome + "!";
const template = `
    Olá
    ${nome}!`;
// O template string também comporta o quebra de linha
console.log(concatenacao, template);

// Utilizando funções/metodos dentro de template string

console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase();

console.log(`Ei.... ${up("cuidado")}!`);