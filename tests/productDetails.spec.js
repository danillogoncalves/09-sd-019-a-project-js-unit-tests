const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    const result = productDetails('Alcool gel', 'Máscara');
    expect(typeof productDetails).toBe('function');
    expect(typeof result).toBe('object');
    expect(Object.keys(result).length).toBe(2);
    expect(typeof Object.values(result)[0]).toBe('object');
    expect(typeof Object.values(result)[1]).toBe('object');
    expect(result[0].name !== result[1].name).toBe(true);
    expect(Object.values(result)[0].details.productId.slice(-3)).toBe('123');
    expect(Object.values(result)[1].details.productId.slice(-3)).toBe('123');
  });
});
