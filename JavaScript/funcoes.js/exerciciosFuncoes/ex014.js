// 14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
// casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
// escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
// também um default, que retornará uma mensagem de erro no console.

const hortifruti = (frutas = " ") => {

    switch (frutas.toLowerCase()) {
        case "maçã":
            return "Não vendemos esta fruta aqui.";
            break;
        case "kiwi":
            return "Estamos com escassez de Kiwis.";
            break;
        case "melancia":
            return "Aqui está, são 3 reais o quilo.";
            break;
        default:
            return "[ERRO!] Não vendemos essa fruta."
    }
}

console.log(hortifruti());
console.log(hortifruti("maçã"));
console.log(hortifruti("Kiwi"));
console.log(hortifruti("Melancia"));
console.log(hortifruti("Laranja"));


