// Simple search functionality
document.getElementById("searchBox").addEventListener("keyup", function () {
  let filter = this.value.toLowerCase();
  let cards = document.querySelectorAll(".internship-card");

  cards.forEach((card) => {
    let title = card.querySelector("h2").textContent.toLowerCase();
    card.style.display = title.includes(filter) ? "block" : "none";
  });
});