// Entendo a estrutura de controle if
function teste1(num) {
    if (num >= 7) // podemos criar uma estrutura if sem a delimitação do bloco de codigo "{}"
        console.log(num); // só que ao fazer isso só sera viculado ao if a primera linha de codigo/ setencia de codigo.
    console.log("Final"); // este console sera impresso todas as vezes independentemente do resultado da condicional

    /*JavaScript entenderia o codigo da seguinte forma
    if(num >= 7)
        console.log(num);
         
    console.log("Final");
    */
}

teste1(6);
teste1(8);

function teste2(num) {
    if (num>=7); { // cuidado ao criar uma estrutura de controle com o ;, antes da declaracao do bloco de codigo.
        console.log(num);
    }

    /* Em vez de printar o 8 printa todos os valores porque em realidade temos 2 sentencias
    
    if (num>7); <- cuidado com o ; isto esta desvinculando nosso bloco de codigo do if.
    {
        console.log(num);
    }
    */

}

teste2(6);
teste2(8);
