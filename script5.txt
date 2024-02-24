const input = document.getElementById("search-input");

input.addEventListener("blur", function() {
  const searchBtn = document.getElementById("search-btn");
  searchBtn.classList.remove("close");
  input.classList.remove("square");
});
