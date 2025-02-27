import { Component, Input, OnInit } from '@angular/core';
import { ProductModule } from 'src/app/models/product/product.module';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() productId: number = 0;
  product: ProductModule | undefined = {
    uid: 0,
    product: 'new',
    price: 23,
    description: 'hello',
    outOfStock: false,
  };
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.product = this.productService.getProductById(this.productId);
  }
}
