import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModule } from 'src/app/models/product/product.module';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: ProductModule | undefined = {
    uid: 0,
    product: '',
    price: 0,
    description: '',
    outOfStock: false,
  };
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('uid'));
    this.product = this.productService.getProductById(id);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}
