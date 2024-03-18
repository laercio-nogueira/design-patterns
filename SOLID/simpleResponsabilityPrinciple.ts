/*
  - Principio da Responsabilidade Simples
  - https://en.wikipedia.org/wiki/Simple_responsibility_principle
  - Nunca deve haver mais de um motivo para uma classe/metodo mudar.
  - Classe/metodo deve ter apenas um motivo para mudar

  ** Exemplo ** 

  A classe Product contem unicamente a responsabilidade com o usuario, nao pode haver mais de uma responsabilidade,
    com isso, a classe de calcular frete, contem apenas a responsabilidade de calcular o frete, nao interagindo diretamente
    com a classe do usuario.
*/
import DB from '../Mocks/DB';
import { ProductInterface } from '../Interface/Product';

class Product<T> {
  create(product: ProductInterface): ProductInterface {
    const productCreated = DB.create(product);
    return productCreated;
  }

  read(id: number): ProductInterface {
    const product = DB.read(id);
    return product;
  }

  update(id: number, product: ProductInterface): string {
    const productUpdated = DB.update(id, product)
    return productUpdated;
  }

  delete(id: number): string {
    const productDeleted = DB.delete(id)
    return productDeleted;
  }
}

class PostalCode {
  calculate(height: number, width: number, length: number): number {
    const priceToWeight = 2.5
    const weight = (length * width) / height;
    return weight * priceToWeight;
  }
}


const simpleResponsabilityPrinciple = () => {
  console.log('Principio da Responsabilidade Simples')
  // start product
  const product = new Product();
  const data: ProductInterface = { name: 'Product 1', height: 20, width: 30, length: 10 };
  const postalCode = new PostalCode();

  // create product
  const { id } = product.create(data);

  // read product
  let productRead: ProductInterface = product.read(id);
  console.log(productRead)

  // calculate price to postalcode
  const price = postalCode.calculate(productRead.height, productRead.width, productRead.length);
  console.log(`Preco do Frete: R$ ${price}`)

  // update product
  const responseUpdated = product.update(id, { ...data, name: 'Product 2' });
  console.log(responseUpdated)

  // delete product
  const responseDelete = product.delete(id);
  console.log(responseDelete)
}

export default simpleResponsabilityPrinciple;