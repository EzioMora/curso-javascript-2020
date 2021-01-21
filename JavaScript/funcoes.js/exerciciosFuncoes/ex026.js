// 26) Fazer um programa para encontrar todos os pares entre 1 e 100.

let count = 1;
let par = [];
while(count <= 100) {
    if(count % 2 == 0) {
        par.push(count);
    }
    count++;
}

console.log(par);

