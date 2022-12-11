let navbar = document.querySelector('.navbar');
document.querySelector('#menu-bar').onclick=() =>{      // when menu bar is clicked
    navbar.classList.toggle('active');                  // toggle class active
}



let search = document.querySelector('.search');
document.querySelector('#search').onclick=() =>{        // when search icon is clicked
    search.classList.toggle('active');                  // toggle class active
}


var swiper = new Swiper(".product-row", { 
    spaceBetween: 30,                   // space between slides
    loop:true,                          // loop mode
    centeredSlides:true,                // center mode
    autoplay:{                          // autoplay, which serves as a slideshow
        delay:9500,                     // delay between slides
        disableOnInteraction:false,     // disable autoplay when user interacts with the slider
    },
    pagination: {                       // pagination, which shows the number of slides
      el: ".swiper-pagination",         // pagination element for the slider
      clickable: true,                  // clickable pagination
    },
    breakpoints: {                      // breakpoints for different screen sizes
      0: {
        slidesPerView: 1,               // 1 slides per view for screen size 0px and above
      },
      768: {
        slidesPerView: 2,               // 2 slides per view for screen size 768px and above
      },
      1024: {
        slidesPerView: 3,               // 3 slides per view for screen size 1024px and above
      },
    },
  });
