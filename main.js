(() => {
  const totalImages = 15;
  const wrapper = document.getElementById("workGallery");

  for (let i = 1; i <= totalImages; i++) {
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide");
    slide.innerHTML = `<img src="images/${i}.jpg" alt="work ${i}">`;
    wrapper.appendChild(slide);
  }

  const swiper = new Swiper('.mySwiper', {
    loop: true,
    effect: 'fade',
    fadeEffect: { crossFade: true },
    autoplay: { delay: 2500, disableOnInteraction: false },
    slidesPerView: 1,
    speed: 1000,
    centeredSlides: true,
  });
})();

const toggleBtn = document.getElementById("toggleReviews");
const reviewsContainer = document.getElementById("reviewsContainer");

toggleBtn.addEventListener("click", () => {
  if (reviewsContainer.style.display === "none") {
    reviewsContainer.style.display = "block";
    toggleBtn.textContent = "Client Reviews ▲"; // arrow changes
  } else {
    reviewsContainer.style.display = "none";
    toggleBtn.textContent = "Client Reviews ▼";
  }
});

toggleBtn.addEventListener("click", () => {
  reviewsContainer.classList.toggle("open");
  toggleBtn.textContent = reviewsContainer.classList.contains("open")
    ? "Client Reviews ▲"
    : "Client Reviews ▼";
});
