// Scroll Spy: Highlight active nav link based on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120; // adjust if needed
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// project of supermarket billing system
  const sliderStates = {
    "supermarket-slider": 0
  };

  function slide(id, direction) {
    const track = document.getElementById(id);
    const totalSlides = track.children.length;
    sliderStates[id] = (sliderStates[id] + direction + totalSlides) % totalSlides;
    track.style.transform = `translateX(-${sliderStates[id] * 100}%)`;
  }
