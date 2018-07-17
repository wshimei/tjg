import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  // public products = [];
  products: any[];

  constructor(private _productService: ProductService, database: AngularFireDatabase) {
    database.list('/products')
            .valueChanges()
            .subscribe(products => {
              this.products = products;
              console.log(this.products);
            });
  }

  ngOnInit() {
    // this._productService.getProducts()
    //     .subscribe(data => this.products = data);
  }

}
