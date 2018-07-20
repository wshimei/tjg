import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  products: any[];
  selectedCategory: string;

  constructor(database: AngularFireDatabase, private router: Router) {
    database.list('/products')
            .valueChanges()
            .subscribe(products => {
              this.products = products;
            });
   }

  ngOnInit() {
  }

  onSelect(product) {
    this.router.navigate(['/products', product.categoryName]);
    this.selectedCategory = product.categoryName;
    $('#navbar-collapse').removeClass('show');
  }
  onClick() {
    $('#navbar-collapse').removeClass('show');
  }
}
