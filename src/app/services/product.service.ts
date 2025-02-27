import { EventEmitter, Injectable } from '@angular/core';
import { ProductModule } from '../models/product/product.module';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: ProductModule[] = [
    new ProductModule('new', 23, 'hello', true),
    new ProductModule('new', 23, 'hello', false),
  ];
  productsListChanged = new EventEmitter<ProductModule[]>();
  constructor() {}
  getProducts() {
    return this.products.slice();
  }
  getProductById(uid: number) {
    return this.products.find((pr) => pr.uid === uid);
  }

  addProduct(product: ProductModule) {
    this.products.push(product);
    this.productsListChanged.emit(this.products.slice());
  }
  editProduct(product: ProductModule) {
    const index = this.products.findIndex((pr) => {
      pr.uid === product.uid;
    });
    if (index !== -1) {
      this.products[index] = product;
      this.productsListChanged.emit(this.products.slice());
    }
  }

  deleteProduct(uid: number) {
    this.products = this.products.filter((product) => product.uid !== uid);
    this.productsListChanged.emit(this.products.slice());
  }
}
