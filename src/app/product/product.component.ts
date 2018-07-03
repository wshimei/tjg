import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-list/product.service';
import { EProduct } from '../product-list/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public products = [];
  selectedCategory;

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getProducts()
        .subscribe(data => this.products = data);
  }

  onSelect(product) {
    this.selectedCategory = product.categoryName;
    console.log(this.selectedCategory);
 }

  selectAll() {
    console.log(this.products);
    this.selectedCategory = this.products;
  }

}
