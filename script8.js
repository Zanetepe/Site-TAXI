const input = document.getElementById("search-input");

input.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    const searchBtn = document.getElementById("search-btn");
    searchBtn.classList.remove("close");
    input.classList.remove("square");
  }
});
