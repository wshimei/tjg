import { Component, OnInit } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    $('#bg-slider').flexslider({
        animation: 'fade',
        directionNav: false, // remove the default direction-nav - https://github.com/woothemes/FlexSlider/wiki/FlexSlider-Properties
        controlNav: false, // remove the default control-nav
        slideshowSpeed: 6000
    });

    /* ======= Case Study Slideshow - Flexslider ======= */
    // Ref: http://flexslider.woothemes.com/thumbnail-slider.html
    // The slider being synced must be initialized first
    $('#carousel').flexslider({
        animation: 'slide',
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 180,
        itemMargin: 5,
        asNavFor: '#slider'
    });

    $('#slider').flexslider({
        animation: 'slide',
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: '#carousel'
    });


    $('#work-carousel').flexslider({
        animation: 'slide',
        controlNav: false,
        animationLoop: false,
        slideshow: false
    });
  }

}
