const scrollTrigger = 100;
window.onscroll = function() {
  if(window.scrollY >= scrollTrigger) {
    document.getElementsByClassName("header_fixed")[0].classList.add("blur");
    document.getElementsByClassName("header_fixed")[0].classList.remove("difference");
    document.getElementsByClassName("header_fixed")[0].style.color = "#000";
  } else {
    document.getElementsByClassName("header_fixed")[0].classList.remove("blur");
    document.getElementsByClassName("header_fixed")[0].classList.add("difference");
    document.getElementsByClassName("header_fixed")[0].style.color = "#fff";
  }
};
