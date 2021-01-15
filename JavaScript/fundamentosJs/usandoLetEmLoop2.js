// Entendo a diferença entre o let e o var no problema historio do JavaScript sobre a variavel Vr
const funcs = []; // definimos o array em branco

for (let i = 0; i < 10 ; i++) {  // Fazemos a iteração  
    funcs.push(function() { // Adicionamos a function dentro da array com o console.log(i) que ao ser almacenada guardara o valor de i que foi passado no scopo da function
        console.log(i); 
    })
}

funcs[2](); 
funcs[8]();