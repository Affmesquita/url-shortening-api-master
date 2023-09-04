const hamburguerMenu = document.querySelector('.nav_hamburguer');
const boxConteiner = document.querySelector('.box-conteiner');

hamburguerMenu.addEventListener('click', () => {
  boxConteiner.classList.toggle('show');
});

function shortenLink() {
  let url = document.getElementById('url-input').value;
  let linkGen = document.getElementsByClassName('link-gen')
  let inputElement = document.getElementsByClassName('input-element')
  if (!url) {
      alert("Insira um URL valida!");
      return;
  }
}