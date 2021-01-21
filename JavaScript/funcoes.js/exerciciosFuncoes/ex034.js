// 34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
// todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.

// const stringParecida = (str1, str2) => {

// }

const isStringDouble = (str1, str2) => {
    if (str1 == undefined || str2 == undefined) {
        return "[ERRO] Inserte uma string valida!";
    }

    if (str1.length == str2.length) {
        return str1.includes(srt2);
    }

    return str1.length > str2.length ? str1.includes(str2) : str2.includes(str1);
}

console.log(isStringDouble("carro hola mundo carro", "hola mundo"));