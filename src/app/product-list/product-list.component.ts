import { productRoutingComponents } from './../product/product-routing.module';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from './product.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

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
  selectedSubCategory: String;
  selectedItem: String;

  constructor(private _productService: ProductService,
              database: AngularFireDatabase,
              private route: ActivatedRoute,
              private router: Router ) {
    database.list('/products')
            .valueChanges()
            .subscribe(products => {
              this.products = products;
            });
  }

  ngOnInit() {
    // this._productService.getProducts()
    //     .subscribe(data => this.products = data);
    this.route.paramMap.subscribe((params: ParamMap) => {
      const categoryName = params.get('categoryName');
      this.selectedCategory = categoryName;
    });
  }

  onSelectSubCat(subCat) {
    this.router.navigate(['/products', subCat.subCatName]);
    this.selectedCategory = subCat.subCatName;
  }

  onSelectItem(item) {
    this.router.navigate(['/products/item', item.itemName]);
    this.selectedItem = item.itemName;
  }

}
