document.addEventListener('DOMContentLoaded', function() {
  let currentIndex = 0;
  const introTextSlider = document.querySelector('.intro-text-slider');

  function showSlide(index) {
    const slides = document.querySelectorAll('.intro-text-slider .intro-text');
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
  }

  showSlide(currentIndex);

  document.querySelectorAll('input[name="slide"]').forEach((radio, index) => {
    radio.addEventListener('change', function() {
      currentIndex = parseInt(this.value);
      showSlide(currentIndex);
    });
  });

  document.querySelector('.btn-prev').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + 3) % 3; // 3 is the total number of slides
    showSlide(currentIndex);
  });

  document.querySelector('.btn-next').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % 3; // 3 is the total number of slides
    showSlide(currentIndex);
  });
});

