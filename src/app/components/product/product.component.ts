import { Component, Input } from '@angular/core';
import { Product } from './../../models/product.models';
import { NgOptimizedImage } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() product!: Product;
}
