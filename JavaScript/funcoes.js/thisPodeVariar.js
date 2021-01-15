// O this pode variar deacordo como vc chama a função
// Executar o codigo no console do browser

function f1() {
    console.log(this === window);
}

// chamando a função em um contexto global
f1();

// true

document.getElementsByTagName("body")[0].onclick = f1;

// click
// ao chamar o this mediante um metodo retorna false porque não esta sendo chamado em um 
// contexto global



function f2() {
    console.log(this === document);
}

f2();

// false
// ao chamar a função em um contexto global o this é igual a window e dentro de window
// se encontra o document por isso a comparacao é falsy

function f3() {
    console.log(this.document === document);
}

f3();

// true
// como dito acima dentro de this em um contexto global se encontra document

document.getElementsByTagName('body')[0].onclick = f2;

// click
// ao chamar a função f2 mediante o evento retorna false porque o this é igual ao body e não
// ao document, já que o document almacena ao body
// e o evento click esta sendo aplicado estrictamente ao elemento body

// vamos entender melhor da seguinte forma

const corpo = document.getElementsByTagName('body')[0]; // almacenamos o body

function f2() {
    console.log(this === corpo);
}

document.getElementsByTagName('body')[0].onclick = f2;

// true
// almacenamos o elemento body na constante e dentro da f2 comparamos this com o elemento
// almacenado na constate e adicionamos o evento click no elemento body que esta almacenado na 
// constate, que executara a f2 ao fazer isso temos como resultado true
// porque ao chamar a função a traves do evento click asocia o this ao elemento.

// si chamamos o f2() directamente no contexto global ele aponta ao objecto global window
// e a comparacao de this === corpo traeria como resultado false

// Em uma function normal o this varia de acordo com quem chamar ela

// this em function arrow

const f4 = () => console.log(this === window);

f4(); // true

// ao utilizar o this em uma funtion arrow ele não varia nunca
// ao definir uma function arrow com this ela fica amarrada ao contexto lexico do qual a function foi definida
// a funtion f4() foi definida no contexto global então o this asociado a function sera
// de contexto global, e não mudara mesmo sim chamamos a function como metodo.

document.getElementsByTagName('body')[0].onclick = f4;

// click
// true
// Aqui chamamos a function arrow no evento click e o this permance sem variar
