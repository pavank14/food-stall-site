function showMenu(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function scrollMenu(id, direction) {
  const container = document.querySelector(`#${id} .menu-scroll`);
  const scrollAmount = 300 * direction;
  container.scrollBy({ left: scrollAmount, behavior: "smooth" });
}

window.addEventListener("load", function () {
  const popup = document.getElementById("popup-overlay");
  const closeBtn = document.getElementById("close-popup");

  popup.classList.remove("hidden"); // Show popup on load

  closeBtn.addEventListener("click", function () {
    popup.classList.add("hidden"); // Hide popup on click
  });
});

