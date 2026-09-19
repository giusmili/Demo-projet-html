document.addEventListener("DOMContentLoaded", (e)=> {
  /* fonction principale */
  e.preventDefault();

  /* Eléments du DOM */
  const bouton = document.getElementById('btn-demo');
  const compteur = document.getElementById('compteur');
  const footer = document.getElementsByTagName('p')[3];

  /* variables */
  let clics = 0;
  let dates = new Date().getFullYear();
  footer.textContent = `© ${dates} - Tous droits réservés.`;
  
  /* event */
  bouton.addEventListener('click', () => {
    clics += 1;
    compteur.textContent = clics;
  });
  

})