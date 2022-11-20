function scrollToTop() {
    window.scrollTo(0, 0);
}

const toTop = document.querySelector(".scrollTop");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})
