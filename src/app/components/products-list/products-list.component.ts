import { Component, OnInit } from '@angular/core';
import { ProductModule } from 'src/app/models/product/product.module';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  products: ProductModule[] = [];
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.productService.productsListChanged.subscribe(
      (products: ProductModule[]) => {
        this.products = products;
      }
    );
  }
}
