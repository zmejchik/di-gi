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
    selectRadioButton(currentIndex);
    showSlide(currentIndex);
  });

  document.querySelector('.btn-next').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % 3; // 3 is the total number of slides
    selectRadioButton(currentIndex);
    showSlide(currentIndex);
  });

  function selectRadioButton(index) {
    // Получаем все радио кнопки с указанным именем
    var radioButtons = document.getElementsByName("slide");
  
    // Проверяем, что индекс находится в пределах допустимых значений
    if (index >= 0 && index < radioButtons.length) {
      // Сбрасываем выбор всех радио кнопок
      for (var i = 0; i < radioButtons.length; i++) {
        radioButtons[i].checked = false;
      }
  
      // Устанавливаем выбор для радио кнопки с указанным индексом
      radioButtons[index].checked = true;
  
      
  }};
  
  
  
  
  
  
});

