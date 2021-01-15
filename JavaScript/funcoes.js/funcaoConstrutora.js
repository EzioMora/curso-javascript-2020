// Entendendo funções construtoras

function Carro(VelocidadeMaxima = 200, delta = 5) {

    // atributo privado
    let velocidadeAtual = 0; // ele no ficara visivel no objecto na hora de instanciar a função 

    // atributo publico
    this.publico = "Olá mundo!";
    // metodo publico
    this.acelerar = function () { // this tornara nosso metodo vissivel ao instanciar o metodo
        if (velocidadeAtual + delta <= VelocidadeMaxima) {
            velocidadeAtual += delta;
        } else {
            velocidadeAtual = VelocidadeMaxima;
        }
    }

    // metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual;
    }
}

const uno = new Carro; // ao instanciar uma função/metodo ela passa a ser um object
                       // em nossa const 'uno' utilizara os mesmos valores padrões
console.log(uno); // aqui podemos apreciar melhor

uno.acelerar(); // aqui estamos chamando a nosso metodo contido no objecto
                // não estamos passando nenhum parametro o que utilizar o valor padrão
console.log(uno.getVelocidadeAtual()); // o metodo retornara a velocidade atual para ser printada

const ferrari = new Carro(350, 20); // aqui estamos instanciando novamente o metodo e
                                    // novos valores padrões para os parametros

ferrari.acelerar(); // chamamos o metodo sem passar nenhum valor ao parametro
ferrari.acelerar(); // e utilizara por defeito os novos padrões definidos
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());

console.log(typeof Carro); 
console.log(typeof ferrari); 
