/* eslint-disable max-len */
// Siga as orientações do README!

// let objeto = { food: {}, drinks: {} };

// const validaMenu = (item) => {
//   if (
//     Object.keys(restaurante.fetchMenu().food).includes(item) ||
//     Object.keys(restaurante.fetchMenu().drinks).includes(item)
//   ) {
//     return 'Item indisponível';
//   }
//   consumption.push(item);
// };

const createMenu = (objeto) => {
  const restaurante = {
    fetchMenu: () => objeto,
    consumption: [],
    order: (item) => {
      if (
        !Object.keys(restaurante.fetchMenu().food).includes(item) 
        && !Object.keys(restaurante.fetchMenu().drinks).includes(item)
      ) {
        return 'Item indisponível';
      }
      restaurante.consumption.push(item);
    },
  //   pay: () => {
  //     let count = 0;
  //     let comanda = restaurante.consumption;
  //     let menuComida = Object.keys(restaurante.fetchMenu().food);

  //     for (let index = 0; index < comanda.length; index += 1) {
  //       for (let index1 = 0; index1 < menuComida.length; index1 += 1) {
  //         if (comanda[index] === menuComida[index1]) {
  //           count += Object.values(restaurante.fetchMenu().food)[index1];
  //         }
  //       }
  //     }
  //     return count;
  //   },
  };

  return restaurante;
};
const objetoRetornadoCreateMenu = createMenu({
  food: { coxinha: 3.9, sanduiche: 9.9 },
  drinks: { agua: 3.9, cerveja: 6.9 },
});

objetoRetornadoCreateMenu.order('coxinha');
objetoRetornadoCreateMenu.order('sanduiche');
objetoRetornadoCreateMenu.order('coxinha');
console.log(objetoRetornadoCreateMenu.consumption);

// console.log(objetoRetornadoCreateMenu.pay());
module.exports = createMenu;
// console.log(Object.keys(restaurante.fetchMenu().food)[index]);
