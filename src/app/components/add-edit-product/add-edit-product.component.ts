import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModule } from 'src/app/models/product/product.module';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css'],
})
export class AddEditProductComponent implements OnInit {
  product: ProductModule | undefined = {
    uid: 0,
    product: '',
    price: 0,
    description: '',
    outOfStock: false,
  };

  constructor(
    private productService: ProductService,
    private router: ActivatedRoute,
    private route: Router
  ) {}
  ngOnInit(): void {
    const id = Number(this.router.snapshot.paramMap.get('uid'));
    if (id) {
      this.product = this.productService.getProductById(id);
    }
  }
  addOrEditProduct() {
    if (this.product!.uid !== null) {
      this.productService.editProduct(this.product!);
      this.route.navigate(['/home']);
    } else {
      this.productService.addProduct(this.product!);
      this.productService.productsListChanged.emit(
        this.productService.getProducts()
      );
      this.route.navigate(['/home']);
    }
    this.resetForm();
  }
  resetForm() {
    this.product = {
      uid: 0,
      product: '',
      price: 0,
      description: '',
      outOfStock: false,
    };
  }
}
