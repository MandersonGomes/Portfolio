/*########## Swiper ##########*/
var swiper = new Swiper(".skills-content", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 4,
  coverflowEffect: {
    rotate: 60,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 4,
    },
  },
});

/*########## Toggle Icon Navbar ##########*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*########## Active Links ##########*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 150;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /*########## Sticky Navbar ##########*/
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  /*########## Remove Toggle Icon And Navbar ##########*/
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/*########## Scroll Reveal ##########*/
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".skills-container, .project-box, .contact-container", {
  origin: "bottom",
});
ScrollReveal().reveal(".home-content h1, .contact h3", { origin: "left" });
ScrollReveal().reveal(".about-content", { origin: "right" });

/*########## Typed Js ##########*/
const typed = new Typed(".appear-text", {
  strings: ["Frontend Developer."],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
});

/*########## Button Projects ##########*/
const button = document.querySelector(".btn");
const paragraph = document.querySelectorAll(".hide");

function moreAbout() {
  paragraph.forEach((p) => p.classList.toggle("hide"));
  /* paragraph.classList.toggle("hide"); */

  switch (button.innerHTML) {
    case "Read More": {
      button.innerHTML = "Read Less";
      break;
    }
    case "Read Less": {
      button.innerHTML = "Read More";
      break;
    }
  }
}

button.addEventListener("click", moreAbout);
