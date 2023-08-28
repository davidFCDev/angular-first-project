import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from 'src/app/components/product/product.component';
import { Product } from './../../models/product.models';
import { HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  imports: [ProductComponent, CommonModule],
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})

export class ProductsComponent {
  http = inject(HttpClient);
  products: Product[] = [];

  ngOnInit() {
    this.http
      .get<Product[]>('https://fakestoreapi.com/products')
      .subscribe((data) => {
        this.products = data;
      });
  }
}
