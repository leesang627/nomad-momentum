const title = document.querySelector("#title");

const CLICKED_CLASS = 'clicked';

function handleClick() {
  console.log(title.classList);
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", handleClick);
}
init();

