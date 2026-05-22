(function () {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("nav--open");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("nav--open");
      });
    });
  }

  const params = new URLSearchParams(window.location.search);
  const service = params.get("service");
  const serviceSelect = document.getElementById("service");

  if (service && serviceSelect) {
    const option = serviceSelect.querySelector('option[value="' + service + '"]');
    if (option) {
      serviceSelect.value = service;
    }
  }
})();
