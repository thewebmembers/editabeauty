$('.our_staf_slider').slick({
    infinite: true,
    dots: true,
    speed: 3000,
    arrows: false,
    autoplay: true, 
    slidesToShow: 3,
    slidesToScroll:1,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  
  });