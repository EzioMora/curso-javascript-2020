const escola = "Cod3r";

// Utilizando a função/metodo .charAt que printa dentro de uma string uma letra correspondiente al indice pasado.
console.log(escola.charAt(4));
/*console.log(escola.charAt(5));*/ /*
Cuando buscamo un indice que no existe JavaScript no regresa un error, regresa un valor en blanco "", si no declaramos el indice sera utilado como default el indide 0*/

// Função/Metodo .charCodeAt é utilizada para saber o valor de um caracter en la tabela unicode

console.log(escola.charCodeAt(3)); // aqui printara o valor unicode do "3" dentro de minha string, para isso tem que tirar a linha 5 porque trava o programa.


// Utilizando o metodo .indexOf() para determinar o indice de um caracter dentro de uma string
console.log(escola.indexOf("3"));

// Conhencdo o metodo .substring()
console.log(escola.substring(1)) // aqui estamos printando os caracteres dentro de minha string a partir do indice 1 que neste caso seria a "o" até o final da string trazendo como resultado "od3r"
console.log(escola.substring(0, 3)) // aqui estamos printando os caracteres desde o indice 0/"C" até o indice 3/"3" mas sem incluir ele no print  tranzedo como resultado "Cod"

// conhecendo o metodo .concat() ele serve para concatenar strings 

console.log("Escola ".concat(escola).concat("!")); // os valores que não estão dentro de uma variavel e são colocado nas execuções como "Escola " ou "!" são chamados de valores literarios direto

// Conhecendo e aplicado o metodo .replace()

console.log(escola.replace(3, "e")); // aqui estamos pegando o valor que esta atribuido ao indice 3 y lo estamos reemplazando por el valor "e" trazendo como resultao "Coder"

// conhecendo o metodo .split()

var arraysNames = "Maria,Ana,Pedro".split(","); // aqui estamos convertdindo uma string com 3 nomes em uma array com 3 valores, cada um correspondente a um nome com indice individual.
console.log(arraysNames);

var array2 = "baner-color-black".split("baner-color-")[1]; // desta forma podemos hacer un filtro dentro de uma string e poder comparar para algum funcionalidade da pagina, neste caso vai retornar uma array com 2 valores para almazenar só o black é importante selecionar o indice do mesmo para ser almacenado en la variavel.
console.log(array2);

