//nav
$(document).ready(function () {
  $(".slide-toggle").click(function () {
    $(this).toggleClass("active");
    $(".menu").animate({
      width: "toggle",
    });
    $("nav").toggleClass("open");
    $(".hamburger-menu").toggleClass("animate");
  });
});

// dynamically load the menu
fetch("/components/menu.html")
  .then((response) => response.text())
  .then((template) => {
    // add the template to the dom
    const selectorDestination = "#menu";
    document.querySelector(selectorDestination).innerHTML = template;

    // mark active menu item
    const selectorActive = `${selectorDestination} a[href='${window.location.pathname}']`;
    const elemActive = document.querySelector(selectorActive);
    const classActive = ["text-gray-100", "bg-gray-600"];
    if (elemActive) elemActive.classList.add(classActive);
  });
