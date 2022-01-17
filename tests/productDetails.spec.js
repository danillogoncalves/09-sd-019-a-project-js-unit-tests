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
    const twoItensObject = () => {
      for (let index =0; Object.values(result); index += 1) {
        if (typeof Object.values(result)[index] !== 'object') {
          return false;
        }
      }
      return true;
    }
    expect(typeof productDetails).toBe('function');
    expect(typeof result).toBe('object');
    expect(Object.keys(result).length).toBe(2);
    expect(twoItensObject).toBeTruthy();
    expect(result[0].name !== result[1].name).toBeTruthy();
    expect((result[0].details.productId).slice(-3) === (result[1].details.productId).slice(-3)).toBeTruthy();
  });
});
