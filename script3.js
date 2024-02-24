const input = document.getElementById("search-input");

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    const searchBtn = document.getElementById("search-btn");
    searchBtn.classList.toggle("close");
    input.classList.toggle("square");
  }
});
