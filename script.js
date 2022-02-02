var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    loop: true
});

const toggleMenu = () => {
      const menuToggle = document.querySelector('.toggle')
      const navegation = document.querySelector('.navegation')
      menuToggle.classList.toggle('active')
      navegation.classList.toggle('active')
    }