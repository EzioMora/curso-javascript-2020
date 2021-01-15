// Conhendo o Array []
const valores = [7.7, 8.9, 6.3, 9.2]; // A modo simples são variaveis compostas a array trabalha com indices
console.log(valores[0], valores[3]); // Para acessar a um valor dentro de uma Array utilizamos o indice onde ele se encontra
console.log(valores[4]); // Quanto intentamos acessar a um elemento que no existe em nossa Array sera retornado undefined

valores[4] = 10; //Aqui le estamos disciendo que en el indice 4 almacenara el valor 10.

console.log(valores); // Aqui podemos ver que foi adicionado com sucesso
console.log(valores.length);// o metodo .lenthg é para determinar el tamanho de nossa Array

valores.push({id: 3}, false, null, "texto"); // o metodo .push() sive para adicionar um elemento na utima posicição disponivel, desta forma podemos almacenar varios valores sem se preocupar por definir o indice.

console.log(valores); // Aqui podemos ver que foi adicionado os elemtnos com sucesso, também podemos ver que almacena diferentes tipos de datos e ate objetos.

console.log(valores.pop()) // o metodo .pop sirve para retirar o ultimo elemento/valor almacenado dentro de nossa array
delete valores[0]; // a função delete serve para eliminar um elemento dentro de nossa array mas o indice permanece.

console.log(valores) // Aqui podemos obsevar melhor como trabalha o delete

console.log(typeof valores)// os Array são também objetos.