(function () {
  var filters = document.querySelectorAll(".filter");
  var pubs = document.querySelectorAll(".pub");
  var years = document.querySelectorAll(".pub-year");

  function applyFilter(type) {
    pubs.forEach(function (pub) {
      pub.hidden = type !== "all" && pub.dataset.type !== type;
    });

    years.forEach(function (year) {
      var node = year.nextElementSibling;
      var visible = false;
      while (node && !node.classList.contains("pub-year")) {
        if (node.classList.contains("pub") && !node.hidden) visible = true;
        node = node.nextElementSibling;
      }
      year.hidden = !visible;
    });
  }

  filters.forEach(function (button) {
    button.addEventListener("click", function () {
      filters.forEach(function (other) {
        other.classList.toggle("active", other === button);
        other.setAttribute("aria-pressed", other === button ? "true" : "false");
      });
      applyFilter(button.dataset.filter);
    });
  });

  var links = Array.prototype.slice.call(
    document.querySelectorAll('nav ul a[href^="#"]')
  );
  var sections = links
    .map(function (link) {
      return document.querySelector(link.getAttribute("href"));
    })
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          links.forEach(function (link) {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === "#" + entry.target.id
            );
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach(function (section) {
      observer.observe(section);
    });
  }
})();
