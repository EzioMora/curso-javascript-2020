// entendendo par nome/valor, chave/valor, identificador/valor 

const saudacao = "Opa!"; // contexto lexico 1

function exec() {
    const saudacao = "Falaaa"; // contexto lexico 2
    return saudacao;
}

const cliente =  {
    nome: "Pedro", // contexto lexico 2
    idade: 32,
    peso: 90,
    endereco : {
        logradouro: "Rua boa vida", // contexto lexico 3
        numero: 274
    } 
}

console.log(saudacao);
console.log(exec());
console.log(cliente);
