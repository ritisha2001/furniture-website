// topbar part 
let i = 0;

const texts = [
  "fall for it. shop the new fall collection",
  "Make it yours. Shop furniture.",
  "Design your comfort. Shop now.",
  "Where comfort meets style."
];

setInterval(() => {
  i = (i + 1) % texts.length;
  document.getElementById("changingText").textContent = texts[i];
}, 2000);


// navbar toggler 

const navbartoggler = document.querySelector(".navbar-toggler");
const navlinks = document.getElementById("nav-link");

let nav = false;

function myfunction(){
if(nav == false){
navlinks.style.display = "block";
nav = true;
}
else{
    navlinks.style.display = "none";
    nav = false;
}
console.log(nav)
}
navbartoggler.addEventListener("click", myfunction);


// swiper part 

document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper", {
    loop: true,
    spaceBetween: 20,

    slidesPerView: 1,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    

    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
});