import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-list/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products = [];

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getProducts()
        .subscribe(data => this.products = data);
  }

}
