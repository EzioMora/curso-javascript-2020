//Entendendo Booleanos
let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

// ao utilizar o ! em uma variave estamos discendo que ela é o inverso do que ela é e sim for !! estamos deixando a logica do jeito que inicia.
isAtivo = 1;
console.log(isAtivo); // aqui vai imprimir o valor almacennado na variavel
console.log(!isAtivo); // aqui estamos discendo que não é 1 o seja invertindo a logica 
console.log(!!isAtivo); // Desta forma podemos descobrir sim um valor é verdadeiro ou falso

console.log('os verdadeiros...');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'texto');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(let = true));

console.log('os falsos...')
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('Para finalizar...');
console.log(!!('' || null || 0 || " "));

let nome = '';
console.log( nome || "Desconhecido"); // Aqui caso nossa variavel não tenha nemhum valor podemos deixar um valor por default como "Desconhecido"
nome = "Lucas";
console.log( nome || "Desconhecido"); // Aqui nossa variavel tem um valor valido para ser printado
