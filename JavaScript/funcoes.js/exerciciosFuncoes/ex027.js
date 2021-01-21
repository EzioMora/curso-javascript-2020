// 27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
// crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
// quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.

const alturaFutura = (altura1, taxa1, altura2, taxa2) => {
  if (altura1 != undefined && taxa1 != undefined && altura2 != undefined && taxa2 != undefined) {

    const resultAltura = (newAlt1, porcentagem1, crianca1, newAlt2, porcentagem2, crianca2) => {

      if (porcentagem1 > porcentagem2) {
        let oldAlt1 = newAlt1;
        let oldAlt2 = newAlt2;
        let taxaDoAlt1 = (1 + (+porcentagem1 / 100));
        let taxaDoAlt2 = (1 + (+porcentagem2 / 100));
        let anosDeCrescimento = 0;

        do {
          newAlt1 *= taxaDoAlt1;
          newAlt2 *= taxaDoAlt2;
          anosDeCrescimento++;
        } while (newAlt2 >= newAlt1);

        newAlt1 = Math.floor(newAlt1);
        newAlt2 = Math.floor(newAlt2);

        return `Criança ${crianca1}: ${oldAlt1} cm - Criança ${crianca2}: ${oldAlt2} cm - ${anosDeCrescimento} ano(s) depois => Criança ${crianca1}: ${newAlt1} cm - Criança ${crianca2}: ${newAlt2} cm`;
      }
      return `A criança ${crianca1} sempre sera menor que a criança ${crianca2}`;
    }

    if (altura1 != altura2) {
      return altura1 < altura2 ? resultAltura(altura1, taxa1, 1, altura2, taxa2, 2) : resultAltura(altura2, taxa2, 1, altura1, taxa1, 2);
    }

    if (altura1 == altura2 && taxa1 != taxa2) {
      return taxa1 > taxa2 ? resultAltura(altura1, taxa1, 1, altura2, taxa2, 2) : resultAltura(altura2, taxa2, 2,altura1, tax1, 1);
    }

    if (altura1 == altura2 && taxa1 == taxa2) {
      return "Ambos tem a mesma altura e taxa de crescimento";
    }
  }
  return "Verifique e inserte dados validos!";
}

  console.log(alturaFutura());
  console.log(alturaFutura(190));
  console.log(alturaFutura(190, 3, 200, 1));
  console.log(alturaFutura(190, 1, 200, 2));
  console.log(alturaFutura(190, 1, 200, 1));
  console.log(alturaFutura(200, 1, 190, 3));
  console.log(alturaFutura(190,3,190,2));
  console.log(alturaFutura(190,3,190,3));

