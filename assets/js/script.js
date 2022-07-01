// Responsável por abrir e fechar o menu.

window.onload = function () {
  document.querySelector(".menu-mobile").addEventListener("click", function () {
    if (document.querySelector(".menu").style.opacity == "100") {
      document.querySelector(".menu").style.opacity = "0";
    } else {
      document.querySelector(".menu").style.opacity = "100";
    }
  });
};