const input = document.getElementById("search-input");

input.addEventListener("input", function() {
  const searchBtn = document.getElementById("search-btn");
  searchBtn.classList.add("close");
  input.classList.add("square");
});
