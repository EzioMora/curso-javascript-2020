// Conhecendo e entendo a estrucutra de controle if

const soBoaNoticia = function (nota) {
    if (nota >= 7) {
        console.log("Aprovado");
    }
}

soBoaNoticia(8.1);
soBoaNoticia(6.1);

const seForVerdadeEuFalo = function (valor) {
    if (valor) {
        console.log(`É Verdade... ${valor}`);
    }
}

// Fazendo o chamado da função e passando valores falsy 
seForVerdadeEuFalo();
seForVerdadeEuFalo(null);
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo(NaN);
seForVerdadeEuFalo("");
seForVerdadeEuFalo(0);

// Os valores falsy não sera impresso porque não define o else já que a função é só para printar valores truthy

// Fazendo o chamado da função e passando valores truthy 
seForVerdadeEuFalo(-1);
seForVerdadeEuFalo(" ");
seForVerdadeEuFalo("?");
seForVerdadeEuFalo([]);
seForVerdadeEuFalo([1, 2]);
seForVerdadeEuFalo({});

