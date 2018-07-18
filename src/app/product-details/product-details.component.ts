import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  products: any[];
  itemName: String;

  constructor(database: AngularFireDatabase, private route: ActivatedRoute, private router: Router) {
    database.list('/products')
            .valueChanges()
            .subscribe(products => {
              this.products = products;
            });
   }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const itemName = params.get('itemName');
      this.itemName = itemName;
    });
  }

}
