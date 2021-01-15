// Entendo 2 formas de amarrar o this a um objecto determinado

// Utilizando .bind() serve para definir o contexto lexico ao qual queremos asociar o tihs
function pessoa1() {
    this.idade = 0;

    setInterval(function() {
        this.idade++
        console.log(this.idade);
    }/*.bind(this)*/, 1000) // Descomentar o metodo para entender o papel do bind
}

new pessoa1;

// guardando em uma constate o this que aponta ao objecto pessoa2
// desta forma sempre o this fara referença ao objecto pessoa 2

function pessoa2() {
    this.idade = 0;

    const thatOuSelf = this;

    setInterval(function(){
        thatOuSelf.idade++;
        console.log(thatOuSelf.idade);
    }, 1000)
}

new pessoa2;