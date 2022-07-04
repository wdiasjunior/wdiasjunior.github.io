const scrollTrigger = 100;
window.onscroll = function() {
  if(window.scrollY >= scrollTrigger) {
    document.getElementsByClassName("header_fixed")[0].classList.add("blur");
    document.getElementsByClassName("header_fixed")[0].classList.remove("difference");
    document.getElementsByClassName("header_fixed")[0].style.color = "#000";

    document.getElementById("menu_icon").style.filter = "invert(1)";

  } else {
    document.getElementsByClassName("header_fixed")[0].classList.remove("blur");
    document.getElementsByClassName("header_fixed")[0].classList.add("difference");
    document.getElementsByClassName("header_fixed")[0].style.color = "#fff";

    document.getElementById("menu_icon").style.filter = "invert(0)";
  }
};

let isMenuOpen = false;

function toggleMenu() {
  if(isMenuOpen && window.innerWidth <= 640) {
    isMenuOpen = false;
    document.getElementsByClassName("menu")[0].style.display = "none";
  } else if(!isMenuOpen && window.innerWidth <= 640) {
    isMenuOpen = true;
    document.getElementsByClassName("menu")[0].style.display = "flex";
  }
}
