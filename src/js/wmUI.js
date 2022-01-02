window.addEventListener('click', function(e){
  let logo = document.getElementById("logo");
  let button = document.getElementById("footerLeftButton");
  let menu = document.getElementById("floatingMenu");

  if (document.getElementById('footerLeftButton').contains(e.target)){
    if(window.getComputedStyle(menu).visibility === "hidden") {
      menu.style.visibility = "visible";
      logo.classList.remove("logo");
      logo.classList.add("logo2");
      button.classList.add("footerLeftButtonActive");
    } else if(window.getComputedStyle(menu).visibility === "visible") {
      menu.style.visibility = "hidden";
      logo.classList.remove("logo2");
      logo.classList.add("logo");
      button.classList.remove("footerLeftButtonActive");
    }
  } else {
    if(window.getComputedStyle(menu).visibility === "visible") {
      menu.style.visibility = "hidden";
      logo.classList.remove("logo2");
      logo.classList.add("logo");
      button.classList.remove("footerLeftButtonActive");
    }
  }
});
