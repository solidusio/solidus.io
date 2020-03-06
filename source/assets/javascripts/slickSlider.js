$(function() {
  $('.slick').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    slidesToScroll: 1
  });

  $('.carousel__list').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    variableWidth: true,
    lazyLoad: 'progressive',
    nextArrow: '<button class="carousel__controls next" type="button">Next</button>',
    prevArrow: '<button class="carousel__controls prev" type="button">Prev</button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: false,
          variableWidth: true,
          infinite: false,
          dots: false,
          arrows: true
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          variableWidth: true,
          infinite: true,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          variableWidth: true,
          infinite: true,
          dots: true,
          arrows: false
        }
      }
    ]
  });
});
