const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", function () {
  this.classList.toggle("active");

  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("hidden");
});
