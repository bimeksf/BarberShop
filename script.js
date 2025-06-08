
const date = new Date()
const footer = document.querySelector("footer")
footer.textContent =   `© ${date.getFullYear()} Salon Elegance – Všechna práva vyhrazena`    


const startC = document.getElementById("star")


const stars  = Array.from({length:4},  () => "★").join("")



startC.textContent= stars


  const toggleBtn = document.getElementById("menu-toggle");
  const menu = document.getElementById('menu');
  const closeIcon = document.getElementById("close-icon");
    const hamburgerIcon = document.getElementById("hamburger-icon");


  toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    hamburgerIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');



  });