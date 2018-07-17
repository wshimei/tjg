import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'The Jerrard Garage';

  constructor(private router: Router) { }

  ngOnInit() {
    // this.router.events.subscribe((evt) => {
    //         if (!(evt instanceof NavigationEnd)) {
    //             return;
    //         }
    //         window.scrollTo(0, 0);
    //     });
    }
    onActivate(e) {
        if (e.constructor.name !== 'ProductsComponent') { // for example
                window.scroll(0, 0);
        }
    }
}
