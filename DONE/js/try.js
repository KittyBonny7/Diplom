// НАЧАЛО. Код для работы кнопки на 768px и 320px
function toggleMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Закрывает меню, если пользователь кликнул за его пределами
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
// КОНЕЦ. Код для работы кнопки на 768px и 320px

// НАЧАЛО. Код для работы слайдера
const slider = document.querySelector('.slider');
const prevArrow = document.querySelector('.prev-arrow');
const nextArrow = document.querySelector('.next-arrow');

let currentIndex = 0;
const slides = slider.querySelectorAll('.slide');

function goToSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('current-slide');
    } else {
      slide.classList.remove('current-slide');
    }
  });
}

function slideToPrev() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = slides.length - 1;
  }
  goToSlide(currentIndex);
}

function slideToNext() {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  goToSlide(currentIndex);
}

prevArrow.addEventListener('click', slideToPrev);
nextArrow.addEventListener('click', slideToNext);

goToSlide(currentIndex);
// КОНЕЦ. Код для работы слайдера
