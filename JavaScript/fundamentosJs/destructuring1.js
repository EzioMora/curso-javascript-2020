// operador destructurin E2015 ES6

const usuario = {
    nome: "Carlos",
    idade: 14,
    endereco: {
        logradouro: "Rua boa vida",
        numero: 274
    }
}

const { nome: nomeUsuario, idade: idadeUsuario} = usuario;
console.log(nomeUsuario, idadeUsuario);


const { sobrenome, apelido = true /*<= valor por default */} = usuario; // Aqui estamos tentanto acessar a dois atributos que não existem em nosso objecto.
console.log(sobrenome , apelido) // undefined e true isto porque ambos não existem e retornam undefined mas no apelido deixamos o valor default "true", é melhor deixar sem valor default

// Como acessar aos atributos que estão dentro de outro elemento do objecto

const { endereco: { logradouro, numero , cep} } = usuario;

console.log(`${logradouro}, ${numero}. CEP: ${cep}.`);

// Algo que não se pode fazer em operador de destructuring

const { cachorro: { raca, idade } } = usuario; // Aqui teremos um erro em nosso programa porque estamos tentanto acessar a 2 atributos que não existem em um elemento que não existe, sim todo o percurso for null/inexistente/undefined apresetara um erro, na linha 16 não acontece isso porque esta procurando os atributos dentro do objecto que sim existe.
console.log( raca, idade); // nem executara esta linha pelo erro da linha 27