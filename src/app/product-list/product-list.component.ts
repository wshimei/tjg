import { productRoutingComponents } from './../product/product-routing.module';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from './product.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  // @Input('productCategoryName') productCategoryName: string;
  productCategoryName: string;

  // public products = [];
  products: any[];
  selectedCategory: String;

  constructor(private _productService: ProductService, database: AngularFireDatabase, private route: ActivatedRoute ) {
    database.list('/products')
            .valueChanges()
            .subscribe(products => {
              this.products = products;
              // console.log(this.products);
            });
  }

  ngOnInit() {
    // this._productService.getProducts()
    //     .subscribe(data => this.products = data);
    this.route.paramMap.subscribe((params: ParamMap) => {
      const categoryName = params.get('categoryName');
      this.selectedCategory = categoryName;
      console.log(this.selectedCategory);
    });

  }

}
