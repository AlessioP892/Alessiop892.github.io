document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelector(".dropdown");
  if (!dropdown) return; // Se non c'è dropdown, esci

  const dropdownMenu = dropdown.querySelector(".dropdown-menu");
  const dropdownToggle = dropdown.querySelector("a");

  // Toggle apertura/chiusura menu al click sul link "Concetti"
  dropdownToggle.addEventListener("click", (e) => {
    e.preventDefault();
    dropdownMenu.classList.toggle("show");
  });

  // Chiudi il menu dropdown se clicco su un link dentro il menu (cambia pagina)
  const dropdownLinks = dropdownMenu.querySelectorAll("a");
  dropdownLinks.forEach(link => {
    link.addEventListener("click", () => {
      dropdownMenu.classList.remove("show");
    });
  });

  // Chiudi il menu se clicco fuori dal dropdown
  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      dropdownMenu.classList.remove("show");
    }
  });
});