(function () {
  const theme = localStorage.getItem("theme") || "dark";

  if (theme !== "dark") {
    document.documentElement.setAttribute("data-theme", theme);
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
})();