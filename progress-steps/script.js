const circles = document.querySelectorAll('.circle');
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentActive = 1;

const update = function () {
  progress.style.width = `${((currentActive - 1) / 3) * 100}%`;
  if (currentActive == 1) {
    prev.disabled = true;
  } else if (currentActive == 4) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList = ['circle active'];
    } else {
      circle.classList.remove('active');
    }
  });
};

next.addEventListener('click', () => {
  currentActive++;
  if (currentActive > 4) {
    currentActive = 4;
  }
  update();
});

prev.addEventListener('click', () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});
