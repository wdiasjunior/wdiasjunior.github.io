setTimeout(function() {
  document.getElementById("line1").style.visibility = 'visible';
  document.getElementById("line1").classList.add("animation");
  document.getElementById("blinking1").style.visibility = 'visible';
}, 1000);
setTimeout(function() {
  document.getElementById("blinking1").style.visibility = 'hidden';
  document.getElementById("typing1").style.visibility = 'visible';
  document.getElementById("typing1").classList.add("typing1");
}, 2000);

setTimeout(function() {
  document.getElementById("typing1").classList.add("animationEnd");

  document.getElementById("line2").style.visibility = 'visible';

  document.getElementById("line3").style.visibility = 'visible';
  document.getElementById("line3").classList.add("animation");
  document.getElementById("blinking2").style.visibility = 'visible';
}, 4500);

setTimeout(function() {
  document.getElementById("blinking2").style.visibility = 'hidden';
  // document.getElementById("blinking2").classList.remove("blinking");
  document.getElementById("typing2").style.visibility = 'visible';
  document.getElementById("typing2").classList.add("typing2");
}, 6000);

setTimeout(function() {
  document.getElementById("typing2").classList.add("animationEnd");

  document.getElementById("line4").style.visibility = 'visible';
  document.getElementById("blinking3").style.visibility = 'visible';
}, 8000);

setTimeout(function() {
  document.getElementById("blinking3").style.visibility = 'hidden';
  document.getElementById("script").style.visibility = 'visible';
  document.getElementById("loading").style.visibility = 'visible';
  document.getElementById("loading").classList.add("typing4");
}, 9000);
