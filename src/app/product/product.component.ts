import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-list/product.service';
import { EProduct } from '../product-list/product';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // public products = [];
  products: any[];
  selectedCategory;

  public productCategoryName;

  constructor(private _productService: ProductService, database: AngularFireDatabase, private route: ActivatedRoute) {
    database.list('/products')
            .valueChanges()
            .subscribe(products => {
              this.products = products;
            });
   }

  ngOnInit() {
    // this._productService.getProducts()
    //     .subscribe(data => this.products = data);
    // const categoryName = this.route.snapshot.paramMap.get('categoryName');
    // this.productCategoryName = categoryName;
    this.route.paramMap.subscribe((params: ParamMap) => {
      const categoryName = params.get('categoryName');
      this.productCategoryName = categoryName;
      console.log(categoryName);
    });
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
