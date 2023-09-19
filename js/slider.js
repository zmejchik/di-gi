// Функция для отображения слайда по индексу
function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  slides.forEach(slide => slide.style.display = 'none');
  slides[index].style.display = 'inline-block';

  // Устанавливаем выбранную radio кнопку
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  radioButtons.forEach((radio, i) => {
    radio.checked = i === index;
  });
}
// Функция для обработки нажатия на radio кнопки
function handleRadioClick(index) {
  showSlide(index);
}
// Функции для переключения слайдов
function nextSlide() {
  currentSlide = (currentSlide + 1) % 3;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + 3) % 3;
  showSlide(currentSlide);
}

const radioButtons = document.querySelectorAll('input[type="radio"]');
radioButtons.forEach((radio, index) => {
  radio.addEventListener('click', () => {
    handleRadioClick(index);
  });
});

// Показываем первый слайд при загрузке страницы
let currentSlide = 0;
showSlide(currentSlide);