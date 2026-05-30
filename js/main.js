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

  const serviceMessages = {
    cooker: "Hello, I need cooker repairing service.",
    mixi: "Hello, I need mixi repairing service.",
    "mixi-jar": "Hello, I need mixi jar repairing service.",
    "fry-pan": "Hello, I need fry pan handle repairing service.",
    "gas-stove": "Hello, I need gas stove repairing service.",
    "pipe-install": "Hello, I need gas stove pipe installation service.",
  };

  const waBase = "https://wa.me/919497863442?text=";

  document.querySelectorAll('a[href*="contact.html?service="]').forEach(function (link) {
    const match = link.getAttribute("href").match(/service=([^&]+)/);
    if (match && serviceMessages[match[1]]) {
      link.href = waBase + encodeURIComponent(serviceMessages[match[1]]);
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  });

  const params = new URLSearchParams(window.location.search);
  const service = params.get("service");
  if (service && serviceMessages[service]) {
    window.location.replace(waBase + encodeURIComponent(serviceMessages[service]));
  }
})();
