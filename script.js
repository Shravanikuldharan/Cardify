const theme = document.documentElement;

document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('btn1')) {
      theme.style.setProperty('--theme-color', '#3498db');
    } else if (btn.classList.contains('btn2')) {
      theme.style.setProperty('--theme-color', '#ff1756');
    } else if (btn.classList.contains('btn3')) {
      theme.style.setProperty('--theme-color', '#1cb65d');
    } else if (btn.classList.contains('btn4')) {
      theme.style.setProperty('--theme-color', '#8e44ad');
    } else {
      theme.style.setProperty('--theme-color', '#f4b932');
    }
  });
});
