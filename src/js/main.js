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

    // Toggle Navbar highlight
    $(function() {
        // this will get the full URL at the address bar
        var url = window.location.href;

        // passes on every "a" tag
        $("#navbar li a").each(function() {
            // checks if its the same on the address bar
            console.log(this);
            if (url == (this.href)) {
              console.log('yay?');
                $('#navbar li.active').removeClass("active");
                $(this).closest("li").addClass("active");
            }
        });
    });

});
