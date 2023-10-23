// const scrollTrigger = 100;
// window.onscroll = function() {
//   if(window.scrollY >= scrollTrigger) {
//     document.getElementsByClassName("header_fixed")[0].classList.add("blur");
//     document.getElementsByClassName("header_fixed")[0].classList.remove("difference");
//     document.getElementsByClassName("header_fixed")[0].style.color = "#2E3440";
//     document.getElementsByClassName("header_item")[0].style.setProperty("--hover-menu-item-color", "#2E3440");
//     document.getElementsByClassName("header_item")[1].style.setProperty("--hover-menu-item-color", "#2E3440");
//     // document.getElementsByClassName("header_item")[2].style.setProperty("--hover-menu-item-color", "#2E3440");
//
//     document.getElementById("menu_icon").style.filter = "invert(1)";
//
//   } else {
//     document.getElementsByClassName("header_fixed")[0].classList.remove("blur");
//     document.getElementsByClassName("header_fixed")[0].classList.add("difference");
//     document.getElementsByClassName("header_fixed")[0].style.color = "#fff";
//     document.getElementsByClassName("header_item")[0].style.setProperty("--hover-menu-item-color", "#fff");
//     document.getElementsByClassName("header_item")[1].style.setProperty("--hover-menu-item-color", "#fff");
//     // document.getElementsByClassName("header_item")[2].style.setProperty("--hover-menu-item-color", "#fff");
//
//     document.getElementById("menu_icon").style.filter = "invert(0)";
//   }
// };

// let isMenuOpen = false;
// function toggleMenu() {
//   if(isMenuOpen && window.innerWidth <= 640) {
//     isMenuOpen = false;
//     document.getElementsByClassName("menu")[0].style.display = "none";
//   } else if(!isMenuOpen && window.innerWidth <= 640) {
//     isMenuOpen = true;
//     document.getElementsByClassName("menu")[0].style.display = "flex";
//   }
// }
//
// window.addEventListener('click', function(e){
//   if(!document.getElementById("header").contains(e.target)) {
//     isMenuOpen = false;
//     document.getElementsByClassName("menu")[0].style.display = "none";
//   }
// });
//
// let darkTheme = false;
// function themeSwitcher() {
//   darkTheme = darkTheme ? false : true;
//   document.getElementsByTagName("html")[0].style.filter = `invert(${darkTheme ? 1 : 0})`;
//   const imgElements = document.getElementsByTagName("img");
//   if(darkTheme) {
//     document.getElementById("theme_switcher_desktop").innerHTML = "light mode";
//     document.getElementById("theme_switcher_mobile").innerHTML = "light mode";
//     for(let i = 0; i < imgElements.length; i++) {
//       imgElements[i].style.filter = "invert(1)";
//     }
//     toggleMenu();
//   } else {
//     document.getElementById("theme_switcher_desktop").innerHTML = "dark mode";
//     document.getElementById("theme_switcher_mobile").innerHTML = "dark mode";
//     for(let i = 0; i < imgElements.length; i++) {
//       imgElements[i].style.filter = "invert(0)";
//     }
//     toggleMenu();
//   }
// }

// themeselector.addEventListener("click", () => {
//   if(document.documentElement.getAttribute("data-theme") === "dark") {
//     localStorage.setItem("theme", "light");
//   } else {
//     localStorage.setItem("theme", "dark");
//   }
// })
