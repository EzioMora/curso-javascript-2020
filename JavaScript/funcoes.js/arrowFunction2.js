// Entendo o this dentro de uma function arrow


function pessoa() {
    this.idade = 0;

    setInterval(() =>{ // O this é amarrado ao contexto que foi definido a function arrow
        this.idade++;  // que é a function pessoa e não mudara independientemente de como se chamado
        console.log(this.idade);
    }, 1000);
}

new pessoa