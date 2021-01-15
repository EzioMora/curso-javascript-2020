// Entendendo o contexto lexico 

const valor = "Global"; // contexto lexico 1

function minhaFuncao() { // contexto lexico 2 de minhaFuncao
    console.log(valor);
}

function exec() { // contexto lexico 2 de exec
    const valor = "local";
    minhaFuncao();
}

exec(); // Global

// ao fazer o chamado de minhaFuncao o console.log() buscara dentro do contexto lexico de
// minhaFuncao a constante/variavel e sim ela não existir ela procurara no contexto maior mais
// proximo que é o global, o seja ela busca de dentro para fora
// e ao chamar a funcao em outro contexto lexico que neste caso foi no contexto do exec
// ela nao apontara ao contexto onde foi chamada e sim onde foi definida.

