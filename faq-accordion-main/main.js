const accordionBtns = document.querySelectorAll(".accordion-btn");

accordionBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    this.classList.toggle("active");
    const accordionText = this.nextElementSibling;
    const plusIcon = this.querySelector(".plus");
    const minusIcon = this.querySelector(".minus");
    if (accordionText.style.maxHeight) {
      accordionText.style.maxHeight = null;
      plusIcon.style.display = "block";
      minusIcon.style.display = "none";
    } else {
      accordionText.style.maxHeight = accordionText.scrollHeight + "px";
      plusIcon.style.display = "none";
      minusIcon.style.display = "block";
    }
  });
});
