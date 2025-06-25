const theme = document.documentElement;

const buttons = document.getElementsByClassName('btn');

buttons[0].onclick = function () {
  theme.style.setProperty('--theme-color', '#3498db');
};
buttons[1].onclick = function () {
  theme.style.setProperty('--theme-color', '#ff1756');
};
buttons[2].onclick = function () {
  theme.style.setProperty('--theme-color', '#1cb65d');
};
buttons[3].onclick = function () {
  theme.style.setProperty('--theme-color', '#8e44ad');
};
buttons[4].onclick = function () {
  theme.style.setProperty('--theme-color', '#f4b932');
};
