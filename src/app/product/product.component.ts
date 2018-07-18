import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-list/product.service';
import { EProduct } from '../product-list/product';
import { ActivatedRoute, ParamMap, Router, NavigationEnd } from '@angular/router';

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
  public subCatName;

  // tslint:disable-next-line:max-line-length
  constructor(private _productService: ProductService, database: AngularFireDatabase, private route: ActivatedRoute, private router: Router) {
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
    });
    this.route.paramMap.subscribe((params: ParamMap) => {
      const subCatName = params.get('subCatName');
      this.subCatName = subCatName;
    });
  }

  onSelect(product) {
    this.router.navigate(['/products', product.categoryName]);
    this.selectedCategory = product.categoryName;
  }

  onSelectSubCat(subCat) {
    this.router.navigate(['/products', subCat.subCatName]);
    this.selectedCategory = subCat.subCatName;
  }

  selectAll() {
    this.selectedCategory = this.products;
  }

}
