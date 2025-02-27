export class ProductModule {
  readonly uid: number = Math.random();
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
    this.product = product;
    this.price = price;
    this.description = description;
    this.outOfStock = outOfStock;
  }
}
