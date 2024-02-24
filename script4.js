const input = document.getElementById("search-input");

input.addEventListener("focus", function() {
  const searchBtn = document.getElementById("search-btn");
  searchBtn.classList.add("close");
  input.classList.add("square");
});
