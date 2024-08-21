function toggleMenu() {
  var menu = document.querySelector('.menu');
  var button = document.querySelector('.button');

  if (menu.style.top === '0vh') {
    menu.style.top = '-100vh';
    button.style.transform = 'rotate(0deg)';
  } else {
    menu.style.top = '0vh';
    button.style.transform = 'rotate(90deg)';
  }
}