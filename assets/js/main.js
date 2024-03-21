

document.addEventListener("DOMContentLoaded", function() {    
    var elements = document.getElementsByClassName("loadingscreen");
    
    setTimeout(() => {
        if (elements.length > 0) {
            elements[0].classList.add("appear");
            setTimeout(() => {
                elements[0].remove();
            }, 2000);
        }    
    }, 2000);
    
    
    document.addEventListener("scroll", () => {
        let header = document.getElementById("bg");
        let btn = document.getElementById("btn");
        let btn2 = document.getElementById("btn2");
        let btn3 = document.getElementById("btn3");

        if (window.scrollY > 200){
            header.classList.add("bg");
        } else {
            header.classList.remove("bg");
        }

        if (window.scrollY > 300) {
            btn.classList.remove("selected");
            btn3.classList.remove("selected");
            btn2.classList.add("selected");
            document.getElementById("upBtn").classList.add("visible");
            document.getElementById("upBtn").classList.remove("invisible");
        } else if(window.scrollY < 200) {
            btn.classList.add("selected");
            btn2.classList.remove("selected");
            btn3.classList.remove("selected");
            document.getElementById("upBtn").classList.add("invisible");
            document.getElementById("upBtn").classList.remove("visible");
        }
    })
});


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  spaceBetween: 340,

  // If we need pagination


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints:{
    968:{
        slidesPerView: 2,
    },
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  



});