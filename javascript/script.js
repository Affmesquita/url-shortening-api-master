const hamburguerMenu = document.querySelector('.nav_hamburguer');
const boxConteiner = document.querySelector('.box-conteiner');

hamburguerMenu.addEventListener('click', () => {
  boxConteiner.classList.toggle('show');
});