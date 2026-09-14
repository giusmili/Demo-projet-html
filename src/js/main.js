const bouton = document.getElementById('btn-demo');
const compteur = document.getElementById('compteur');

let clics = 0;

bouton.addEventListener('click', () => {
  clics += 1;
  compteur.textContent = clics;
});
