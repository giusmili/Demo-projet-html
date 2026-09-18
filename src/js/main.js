document.addEventListener("DOMContentLoaded", (e)=> {
  e.preventDefault();
  const bouton = document.getElementById('btn-demo');
  const compteur = document.getElementById('compteur');
  const footer = document.getElementsByTagName('p')[3];
  let clics = 0;
  let dates = new Date().getFullYear();
  footer.textContent = `© ${dates} - Tous droits réservés.`;

  bouton.addEventListener('click', () => {
    clics += 1;
    compteur.textContent = clics;
  });
  

})