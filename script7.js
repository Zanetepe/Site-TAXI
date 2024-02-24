const input = document.getElementById("search-input");

input.addEventListener("input", function() {
  if (input.value === "") {
    const searchBtn = document.getElementById("search-btn");
    searchBtn.classList.remove("close");
    input.classList.remove("square");
  }
});
