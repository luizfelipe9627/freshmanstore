// Responsável por abrir e fechar o menu.

window.onload = function () {
  document.querySelector(".menu-mobile").addEventListener("click", function () {
    if (document.querySelector(".menu-burguer").style.display == "flex") {
      document.querySelector(".menu-burguer").style.display = "none";
      document.querySelector(".menu-burguer").style.opacity = "0";
    } else {
      document.querySelector(".menu-burguer").style.display = "flex";
      document.querySelector(".menu-burguer").style.opacity = "100";
    }
  });
};