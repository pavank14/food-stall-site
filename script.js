function showMenu(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function scrollMenu(id, direction) {
  const container = document.querySelector(`#${id} .menu-scroll`);
  const scrollAmount = 300 * direction;
  container.scrollBy({ left: scrollAmount, behavior: "smooth" });
}
