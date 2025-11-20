const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.arrow.prev');
const next = document.querySelector('.arrow.next');
let current = 0;

function showSlide(index){
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
  current = index;
}

prev.addEventListener('click', () => {
  let index = current - 1 < 0 ? slides.length - 1 : current - 1;
  showSlide(index);
});

next.addEventListener('click', () => {
  let index = (current + 1) % slides.length;
  showSlide(index);
});

showSlide(current);
