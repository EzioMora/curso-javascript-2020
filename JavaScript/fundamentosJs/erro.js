// Conhecendo try, catch e throw
function tratarErroELancar(erro) {
    
    // throw new Error("[ERRO 404!]");
    // throw 10;
    // throw true;
    // throw "mensagem";
    
    throw {
        nome: erro.name,
        msg: erro.mensagem,
        date: new Date()
    }
}

function printNameUpperCase(obj) {
    try { // try é utilizado para englobar um codigo que pode dar erro
        console.log(obj.name.toUpperCase() + "!!!"); 
    } catch (e) { // catch atrapa o erro e pode ser tratado ou encaminha para o throw que lança o erro ao cliente
        tratarErroELancar(e);
    } finally { // finally sempre sera executado havendo ou não erro
        console.log("final!");
    }
}

const obj = {
    nome: "Roberto" // aqui coloquei nome para inducir o erro na function é name
}
printNameUpperCase(obj);