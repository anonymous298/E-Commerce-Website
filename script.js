// Creating our hamburger menu logic
let hamburgerButton = document.getElementById('hamburger');
let closeButton = document.getElementById('close');

let secondaryNavbar = document.querySelector('.secondary-nav');

hamburgerButton.addEventListener('click', () => {
    secondaryNavbar.classList.toggle('secondary-nav-show')
})

closeButton.addEventListener('click', () => {
    secondaryNavbar.classList.toggle('secondary-nav-show');
})

// Creating our smoothscrolling logic

function smoothScrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.addEventListener("scroll", () => {
  const btn = document.getElementById("backToTopBtn");

  if (window.scrollY > 700) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
});
