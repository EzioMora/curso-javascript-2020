// Conhecendo e entendendo o desvio break e continue

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i in nums) {
    if(i == 5) {
        break; // o break serve para interromper a execução do for mas proximo dele
    }
    
    console.log(`${i} = ${nums[i]}`);
}

for (let y in nums) {
    if(i == 5) {
        continue; // o continue serve para interromper a repeticao atual e continuar para a seguinte
    }
    console.log(`${y} = ${nums[i]}`);
}

externo: for (let a in nums) {
    for (let b in nums) {
        if (a == 2 && b == 3) {
            break externo; // Para interromper um for externo é necesario rotular ele para indicar ao break qual for queremos interromper
        }
    }
}

//obs. Evite utilizar este tipo de estrutura porque torna o codigo mais confuso e dificil de manter