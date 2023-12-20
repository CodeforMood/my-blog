const inputFormElem = document.getElementById("search");
const formElem = document.getElementById("navbar-form");

formElem.addEventListener("submit", (ev) => {
  ev.preventDefault();
  fetch(`/?search=${inputFormElem.value}`);
});
