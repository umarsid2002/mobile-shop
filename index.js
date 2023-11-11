$(document).ready(function(){
    // Top Slider
    $("#banner-area .owl-carousel").owlCarousel({
        dots: true,
        items: 1
    });
  });

$(document).ready(function(){
    // Top Sale Carousel
    $("#top-sale .owl-carousel").owlCarousel({
        dots: false,
        items: 4,
        loop: true,
        nav: true,
        responsive: {
            0 : {
                items: 1
            },

            600 : {
                items: 3
            },

            1000 : {
                items: 5
            }
        }
    });

    // Grid for special price
    var $grid = $(".grid").isotope({
        layoutMode: 'fitRows',
        itemSelector: '.grid-item',
    })
 

     // filter items on button click
    $(".button-group").on("click", "button", function(){
        var filterValue = $(this).attr('data-filter');
        console.log(filterValue)
        $grid.isotope({ filter: filterValue});
    })
    
    // New Phones & Owl Carousel
    $("#new-phones .owl-carousel").owlCarousel({
        dots: true,
        items: 4,
        loop: true,
        nav: false,
        responsive: {
            0 : {
                items: 1
            },

            600 : {
                items: 3
            },

            1000 : {
                items: 5
            }
        }
    });

    // Blog Owl Carousel
    $("#blogs .owl-carousel").owlCarousel({
        dots: true,
        loop: true,
        nav: false,
        responsive: {
            0 : {
                items: 1
            },

            600 : {
                items: 3
            }
        }
    });
    
  });