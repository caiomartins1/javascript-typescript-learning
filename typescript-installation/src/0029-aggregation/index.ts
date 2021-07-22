export class Cart {
  private readonly products: Product[] = [];

  addProducts(...products: Product[]): void {
    for (const product of products) {
      this.products.push(product);
    }
  }

  numOfProducts(): number {
    return this.products.length;
  }

  winnings(): number {
    return this.products.reduce((sum, prod) => {
      return sum + prod.price;
    }, 0);
  }
}

export class Product {
  constructor(public name: string, public price: number) {}
}

const p1 = new Product('Tshirt', 19.99);
const cart = new Cart();
cart.addProducts(p1);
