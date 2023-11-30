const yearEl = document.querySelector(".year");
const btnNavEl = document.querySelector(".btn-mobile-nav");
const mainNav = document.querySelector(".main__nav");
const linkAll = document.querySelectorAll("a:link");

// FOR THE FOOTER YEAR CHANGE
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// FOR THE BUTTON NAV TO WORK
btnNavEl.addEventListener("click", function () {
  mainNav.classList.toggle("nav-open");
});

// FOR SMOOTH SCROLLING OF THE LINKS
linkAll.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // SCROLL TO OTHER LINKS

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({
        behavior: "smooth",
      });
    }

    // CLOSE MOBILE NAVIGATION

    if (link.classList.contains("nav__link"))
      mainNav.classList.toggle("nav-open");
  });
});
