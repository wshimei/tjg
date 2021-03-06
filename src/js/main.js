$(document).ready(function() {

    /* ======= jQuery Responsive equal heights plugin ======= */
    /* Ref: https://github.com/liabru/jquery-match-height */

     $('#who .item-inner').matchHeight();
     $('#testimonials .item-inner .quote').matchHeight();
     $('#latest-blog .item-inner').matchHeight();
     $('#services .item-inner').matchHeight();
     $('#team .item-inner').matchHeight();
     $('#work-list .item .content').matchHeight();



	/* ======= Fixed Header animation ======= */

    $(window).on('scroll', function() {

         if ($(window).scrollTop() > 80 ) {
             $('#header').addClass('header-shrink');
         }
         else {
             $('#header').removeClass('header-shrink');
         }
    });
});
