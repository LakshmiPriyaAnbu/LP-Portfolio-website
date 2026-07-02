// theme toggle — shared by all pro templates
(function () {
  var root = document.documentElement;
  function current() { return root.getAttribute("data-theme"); }
  function set(t) { root.setAttribute("data-theme", t); try { localStorage.setItem("pf-theme", t); } catch (e) {} }
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-theme-toggle]");
    if (b) { set(current() === "dark" ? "light" : "dark"); }
  });
})();
