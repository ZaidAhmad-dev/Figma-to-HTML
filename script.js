window.addEventListener("load", function(){
    var bars = document.getElementsByClassName("bars")[0];
bars.addEventListener("click", () => {
    var navListMobile = document.getElementsByClassName("nav-list-mobile")[0];
    // navListMobile.style.display = "block";
    
    // fa-solid fa-xmark

    if(navListMobile.style.display == "block"){
        navListMobile.style.display = "none"
        bars.classList.remove("fa-xmark")
    } else{
        navListMobile.style.display = "block"
        bars.classList.add("fa-xmark")
    }
})

$('.projects-slider').slick({
    mobileFirst: true,
    dots: false,
    infinite: false,
    arrows: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-arrow-left-long' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-arrow-right-long' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 575.98,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }      
      },
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 3,
            slidesToScroll: 1
        }
      }
    ]
  });
})

$('.testimonial-slider-wrapper').slick({
  mobileFirst: true,
  dots: false,
  infinite: false,
  arrows: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-arrow-left-long' aria-hidden='true'></i></button>",
  nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-arrow-right-long' aria-hidden='true'></i></button>",
});