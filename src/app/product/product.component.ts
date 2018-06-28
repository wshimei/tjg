import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public products = [];

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getProducts()
        .subscribe(data => this.products = data);
  }


}
