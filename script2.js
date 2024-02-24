const input = document.getElementById("search-input");

const expand = () => {
  const searchBtn = document.getElementById("search-btn");
  searchBtn.classList.toggle("close");
  input.classList.toggle("square");
};

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    expand();
  }
});
