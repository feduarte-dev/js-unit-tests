const createMenu = require('../src/restaurant');
 
describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    // Requisito 1
    const inventorio = createMenu({ food: {}, drinks: {} });
    const objeto = { food: {}, drinks: {} };
    const objetoRetornadoCreateMenu = createMenu(
      {food: {coxinha: 3.90, sanduiche: 9.90},
      drinks: {agua: 3.90, cerveja: 6.90}});
    expect(createMenu()).toHaveProperty('fetchMenu');
    expect(typeof inventorio.fetchMenu).toBe('function');

    // Requisito 2
    expect(createMenu({ food: {}, drinks: {} }).fetchMenu()).toHaveProperty('food');
    expect(createMenu({ food: {}, drinks: {} }).fetchMenu()).toHaveProperty('drinks');

    // Requisito 3
    expect(objeto).toEqual(createMenu({ food: {}, drinks: {} }).fetchMenu());

    // Requisito 5
    expect(createMenu({ food: {}, drinks: {} })).toHaveProperty('consumption', []);

    // Requisito 9/10
    objetoRetornadoCreateMenu.order('agua');
    objetoRetornadoCreateMenu.order('agua');
    objetoRetornadoCreateMenu.order('sanduiche');
    expect(objetoRetornadoCreateMenu.consumption).toHaveLength(3);

    // Requisito 11
    expect(objetoRetornadoCreateMenu.pay()).toBe(17.7);
  });
});
