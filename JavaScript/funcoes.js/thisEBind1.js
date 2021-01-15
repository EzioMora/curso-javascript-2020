const pessoa = {
    saudacao: "Bom dia!",
    falar() {
        console.log(this.saudacao);
    }
}

pessoa.falar(); // chamando a function em contexto global
// ao chamar a function em um contexto global o this representa o objecto pessoa

const falar = pessoa.falar; // chamando a function como metodo


falar(); // conflicto entre paradigmas: funcional e OO
// ao chamar a function como metodo o this não esta asociado ao objecto pessoa e sim ao 
// objecto global/window
 

const falarDePessoa = pessoa.falar.bind(pessoa); // ao utilizar o metodo .bind()
// estamos definiendo dentro de nossa constate em que contexto o this esta asociado neste caso
// estamos asociando ele ao objecto pessoa e sempre que chamemos a constante em qualquer lugar
// o this estara asociado a pessoa

falarDePessoa();