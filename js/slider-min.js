var h1Element = document.querySelector('.intro-teatle h1');
  var radioButtons = document.querySelectorAll('input[name="slide"]');
  var currentIndex = 0;

  function updateH1Text() {
    var selectedRadioValue = document.querySelector('input[name="slide"]:checked').value;
    h1Element.textContent = getH1Text(selectedRadioValue);
  }

  function getH1Text(radioValue) {
    switch (radioValue) {
      case "0":
        return "МИСЛИ ГЛОБАЛЬНО";
      case "1":
        return "МИСЛИ КРЕАТИВНО";
      case "2":
        return "МИСЛИ РАДІСНО";
      default:
        return "МИСЛИ ГЛОБАЛЬНО";
    }
  }

  function updateH1TextSequentially(next) {
    if (window.innerWidth <= 768) {
      if (next) {
        currentIndex = (currentIndex + 1) % radioButtons.length;
      } else {
        currentIndex = (currentIndex - 1 + radioButtons.length) % radioButtons.length;
      }
      radioButtons[currentIndex].checked = true;
      updateH1Text();
    }
  }

  // Update the text initially and when the window is resized or radio buttons change
  updateH1Text();
  window.addEventListener('resize', updateH1Text);

  // Update the text when a radio button is changed
  radioButtons.forEach(function (radioButton) {
    radioButton.addEventListener('change', updateH1Text);
  });

  // Update the text when "btn-prev" is clicked
  var btnPrev = document.querySelector('.btn-prev');
  btnPrev.addEventListener('click', function () {
    updateH1TextSequentially(false);
  });

  // Update the text when "btn-next" is clicked
  var btnNext = document.querySelector('.btn-next');
  btnNext.addEventListener('click', function () {
    updateH1TextSequentially(true);
  });
