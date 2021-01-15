// IIFE -> Immediately Invoked Function Expression

(function(){ // o codigo que estiver dentro de minha IIFE não sera visto em meu escopo globa
    console.log("Sera executado na hora!");
    console.log("Fode do escopo global");
})

// Desta forma meu codigo fica visivel no escopo global e pode gerar bugs.
console.log("Sera executado na hora!");
console.log("Fode do escopo global");