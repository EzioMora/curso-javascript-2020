console.log(typeof Object); // Um Object é uma função
console.log(typeof new Object); // Ao instanciar uma function ela se torna um Object

const cliente = function() {};
console.log(typeof cliente);
console.log(typeof new cliente); 


class produto {};
console.log(typeof produto);
console.log(typeof new produto); // O mesmo aplica para as classes porque também são funções.
