const totalImages = 15;
const wrapper = document.getElementById("workGallery");

// Add image slides
for (let i = 1; i <= totalImages; i++) {
  const slide = document.createElement("div");
  slide.classList.add("swiper-slide");
  slide.innerHTML = `<img src="images/${i}.jpg" alt="work ${i}">`;
  wrapper.appendChild(slide);
}

// Initialize Swiper
const swiper = new Swiper('.mySwiper', {
  loop: true,
  effect: 'fade',
  fadeEffect: { crossFade: true },
  autoplay: { delay: 2500, disableOnInteraction: false },
  slidesPerView: 1,
  speed: 1000,
  centeredSlides: true,
});
