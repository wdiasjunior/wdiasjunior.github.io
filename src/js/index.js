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

window.addEventListener('click', function(e){
  if(!document.getElementById("header").contains(e.target)) {
    isMenuOpen = false;
    document.getElementsByClassName("menu")[0].style.display = "none";
  }
});

// yes, this theme switcher is simply an invert filter
// but we don't need to talk about that
let invertValue = 0;
function themeSwitcher() {
  invertValue = invertValue ? 0 : 1;
  document.getElementsByTagName("html")[0].style.filter = `invert(${invertValue})`;
  const imgElements = document.getElementsByTagName("img");
  if(invertValue) {
    document.getElementById("theme_switcher_desktop").innerHTML = "light mode";
    document.getElementById("theme_switcher_mobile").innerHTML = "light mode";
    for(let i = 0; i < imgElements.length; i++) {
      imgElements[i].style.filter = "invert(1)";
    }
    toggleMenu();
  } else {
    document.getElementById("theme_switcher_desktop").innerHTML = "dark mode";
    document.getElementById("theme_switcher_mobile").innerHTML = "dark mode";
    for(let i = 0; i < imgElements.length; i++) {
      imgElements[i].style.filter = "invert(0)";
    }
    toggleMenu();
  }
}
