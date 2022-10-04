var slide_index = 1;
displaySlide(slide_index);

function nextSlide(n) {
  displaySlide((slide_index += n));
}

function currentSlide(n) {
  displaySlide((slide_index = n));
}

function displaySlide(n) {
  var i;
  var slide = document.getElementsByClassName("showSlide");
  if (n > slide.length) {
    slide_index = 1;
  }
  if (n < 1) {
    slide_index = slide.length;
  }
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  slide[slide_index - 1].style.display = "block";
}
