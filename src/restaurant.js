/* eslint-disable max-len */
// Siga as orientações do README!

// const pgmtFood = () => {
//   let count = 0;
//   let comanda = restaurante.consumption;
//   let menuComida = Object.keys(restaurante.fetchMenu().food);

//   for (let index = 0; index < comanda.length; index += 1) {
//     for (let index1 = 0; index1 < menuComida.length; index1 += 1) {
//       if (comanda[index] === menuComida[index1]) {
//         count += Object.values(createMenu.fetchMenu().food)[index1];
//       }
//     }
//   }
//   return count;
// };

// const pgmtDrink = () => {
//   let count1 = 0;
//   let comanda = restaurante.consumption;
//   let menuBebida = Object.keys(restaurante.fetchMenu().drinks);

//   for (let index = 0; index < comanda.length; index += 1) {
//     for (let index1 = 0; index1 < menuBebida.length; index1 += 1) {
//       if (comanda[index] === menuBebida[index1]) {
//         count1 += Object.values(restaurante.fetchMenu().drinks)[index1];
//       }
//     }
//   }
//   return count1;
// };
// const pagamento = () => {
//   pgmtFood();
//   pgmtDrink();
//   return count + count1;

// }

const createMenu = (objeto) => {
  const restaurante = {
    fetchMenu: () => objeto,
    consumption: [],
    order: (item) => {
      if (
        !Object.keys(restaurante.fetchMenu().food).includes(item) &&
        !Object.keys(restaurante.fetchMenu().drinks).includes(item)
      ) {
        return 'Item indisponível';
      }
      restaurante.consumption.push(item);
    },
    pay: () => {
      let count = 0;
      let comanda = restaurante.consumption;
      let menuComida = Object.keys(restaurante.fetchMenu().food);

      for (let index = 0; index < comanda.length; index += 1) {
        for (let index1 = 0; index1 < menuComida.length; index1 += 1) {
          if (comanda[index] === menuComida[index1]) {
            count += Object.values(restaurante.fetchMenu().food)[index1];
          }
        }
      }
      let count1 = 0;
      let menuBebida = Object.keys(restaurante.fetchMenu().drinks);

      for (let index = 0; index < comanda.length; index += 1) {
        for (let index1 = 0; index1 < menuBebida.length; index1 += 1) {
          if (comanda[index] === menuBebida[index1]) {
            count1 += Object.values(restaurante.fetchMenu().drinks)[index1];
          }
        }
      }
      return count1 + count;
    },
  };

  return restaurante;
};
const objetoRetornadoCreateMenu = createMenu({
  food: { coxinha: 3.9, sanduiche: 9.9 },
  drinks: { agua: 3.9, cerveja: 6.9 },
});

objetoRetornadoCreateMenu.order('coxinha');
objetoRetornadoCreateMenu.order('cerveja');
objetoRetornadoCreateMenu.order('sanduiche');
objetoRetornadoCreateMenu.order('coxinha');
console.log(objetoRetornadoCreateMenu.consumption);

console.log(objetoRetornadoCreateMenu.pay());
module.exports = createMenu;
