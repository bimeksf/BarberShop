
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


document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const preloader = document.getElementById("preloader");
    preloader.classList.add("opacity-0");

    setTimeout(() => {
      preloader.style.display = "none";
    }, 1000);
  }, 100); 
});




  gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelector(".horizontal-sections");

gsap.to(sections, {
  x: () => `-${sections.scrollWidth - window.innerWidth}px`,
  ease: "none",
  scrollTrigger: {
    trigger: sections,
    pin: true,
    scrub: 1,
    end: () => `+=${sections.scrollWidth - window.innerWidth}`
  }
});


 window.addEventListener("DOMContentLoaded", () => {
    gsap.from(".hero-title", {
      opacity: 0,
      y: -30,
      duration: 0.8,
      ease: "power2.out"
    });

    gsap.from(".hero-subtitle", {
      opacity: 0,
      scale: 0.95,
      delay: 0.8,
      duration: 0.6,
      ease: "power2.out"
    });

    gsap.from(".hero-buttons", {
      opacity: 0,
      y: 20,
      delay: 1,
      duration: 0.6,
      ease: "power2.out"
    });
  });