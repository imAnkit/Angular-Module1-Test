export class ProductModule {
  uid: number;
  product: string;
  price: number;
  description: string;
  outOfStock: boolean;
  constructor(
    product: string,
    price: number,
    description: string,
    outOfStock: boolean
  ) {
    this.uid = Math.random();
    this.product = product;
    this.price = price;
    this.description = description;
    this.outOfStock = outOfStock;
  }
}
