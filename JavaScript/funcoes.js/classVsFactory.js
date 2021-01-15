// Classe vs function factory

// classe
class pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`);
    }
}

const p1 = new pessoa('João');
console.log(p1);
p1.falar();

// sim executamos o codigo de arriba no browser printara "Meu nome é João"
// mas sim criamos um evento click no body chamando como metodo o p1.falar();
// retornara undefined porque o this estara apuntando ao objecto global e não a o objecto pessoa

// function factory
const criarPessoa = function (nome) {
    return {
        falar : function () {
            console.log(`Meu nome é ${nome}`);
        }
    }
}

const p2 = criarPessoa("Pedro");
p2.falar();

// sim executamos o codigo no browser printara o console.log da linha 26
// sim criamos um evento click no body com a p2.falar também printara a linha 26
// porque ao chamar o metodo ele tem conciencia de onde foi criado e siempre
// mantendra o escopo onde foi definido para executar a função. 