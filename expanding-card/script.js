const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    if (panel.classList.contains('active')) {
      return;
    } else {
      for (let i of panels) {
        i.classList = ['panel'];
      }
      panel.classList.add('active');
    }
  });
});
