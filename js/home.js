var prevItem,
  currentNode = null;

/*Button animation to X symbol on click*/
function myFunction(x) {
  x.classList.toggle("change");
  /*Side bar visiblity on click in mobile devices*/
  let element = document.getElementById("navbar-mobile__sidebar");
  element.classList.toggle("active");
  let element2 = document.getElementById("content");
  element2.classList.toggle("active");
  /*Add selection to home item on open*/
  let element3 = document.getElementsByClassName("navbar-mobile__item");
  element3[0].classList.add("navbar-mobile__item--active");
  prevItem = element3[0];
  /*Remove last selected item*/
  if (currentNode !== null) {
    currentNode.classList.remove("navbar-mobile__item--active");
  }
}

/*Displaying active nav items in mobile navbar side navigation*/

function activeLink() {
  let element = document.getElementById("navbar-mobile__sidebar");
  element.addEventListener("click", function(e) {
    if (event.target.tagName === "A") {
      prevItem.classList.remove("navbar-mobile__item--active");
      currentNode = e.target.parentNode;
      currentNode.classList.add("navbar-mobile__item--active");
      prevItem = currentNode;
    }
  });
}
