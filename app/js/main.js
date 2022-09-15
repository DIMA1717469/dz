$(function() {
  
  $('.slick-dots').slick({
      slidesToShow: 1,
    dots: false,
      arrows: true,
      autoplay: true,
      adaptiveHeight: true,
      autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          dots: false,
          arrows: false
        }
      }
    ],
    mobileFirst: false,
    });
  
  
  $('.slider-blog__wrapper').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="18.5" fill="white" fill-opacity="0.01" stroke="#C2C2C2" stroke-width="3"/><path d="M18.6352 11.4508L26.3811 19.1967C26.9822 19.801 26.9822 20.7769 26.3811 21.3811L18.6352 29.1271C18.0558 29.6243 17.1991 29.6243 16.6197 29.1271C15.9706 28.5709 15.8947 27.5918 16.4509 26.9427L23.0968 20.2967L16.4508 13.6352C15.8497 13.031 15.8497 12.055 16.4508 11.4508C17.055 10.8497 18.031 10.8497 18.6352 11.4508Z" fill="#C2C2C2" /></svg ></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="18.5" fill="white" fill-opacity="0.01" stroke="#C2C2C2" stroke-width="3"/><path d="M21.1968 29.0492L13.4508 21.3033C12.8497 20.699 12.8497 19.7231 13.4508 19.1189L21.1968 11.3729C21.7761 10.8757 22.6328 10.8757 23.2122 11.3729C23.8614 11.9291 23.9372 12.9082 23.3811 13.5573L16.7351 20.2033L23.3811 26.8648C23.9822 27.469 23.9822 28.445 23.3811 29.0492C22.7769 29.6503 21.8009 29.6503 21.1968 29.0492Z" fill="#C2C2C2" /></svg></button>',
    responsive: [
      {
        breakpoint: 500,
        settings: {
          arrows: true,
          mobileFirst: false,
          appendDots: $('')
        }
      }
    ],
     mobileFirst: false,
    // appendArrows: $('.slider-blog__title')
    // appendDots: $('')
  });

  
  $('.menu__btn,.menu a,.item11 a').on('click', function () {
    $('.menu__btn,.menu__list,.item11').toggleClass('menu__list--active')
  });

// shop
  $('.menu__btn,.shop__inner,.shop-search,.filter__item,.filter-price,.filter__item filter-price,.filter__item').on('click', function () {
    $('.menu__btn,.shop__inner,.menu__list').toggleClass('shop__inner--active')
  });
  // 


  if (window.matchMedia("(max-width: 400px)").matches) {
    $('.the__items').slick({
      slidesToShow: 1,
      dots: true,
      arrows: true,
      autoplay: true,
      adaptiveHeight: true,
      autoplaySpeed: 2000,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>',

    });
  }



$('.filter-price__input').ionRangeSlider({
    type:"double",
    prefix: "$",
    onStart:function (data){
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
     onChange: function (data) {
     $('.filter-price__from').text(data.from);
     $('.filter-price__to').text(data.to);
  },
  })

  $(".star").rateYo({
    // rating: 3.6,
    starWidth: "24px",
    normalFill: "#C1C1C14D",
    ratedFill: "#FFB800",
    readOnly: true,

    starSvg: '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.84 19.252a1 1 0 0 1-1.452-1.054l.795-4.633-3.366-3.28a1 1 0 0 1 .554-1.707l4.652-.676 2.08-4.215a1 1 0 0 1 1.794 0l2.08 4.215 4.652.676a1 1 0 0 1 .554 1.706l-3.366 3.281.795 4.633a1 1 0 0 1-1.451 1.054L12 17.065l-4.16 2.187z"/></svg> '
  });


  $('input, select').styler();

  $('[data-fancybox]').fancybox({
    image: {
      protect: true
    }
  });
  $('.product-one__img-slider').slick({
    dots: true,
    arrows: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
    prevArrow: '<button type="button" class="slick-prev"><img src="app/images/product-page/arrow-left.jpg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="app/images/product-page/arrow-right.jpg" alt=""></button>',
  });



  const myCarousel = new Carousel(document.querySelector(".carousel"), {
    // Options
  });

  $('.slider').slick({
    arrows: false,
    fade: true,
    autoplay: 3000,
    dots: true
  });



  var mixer = mixitup('.product__items');
});