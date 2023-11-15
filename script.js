  // Function to switch the responsive class for the navigation bar
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  // Close the navigation bar after clicking 
  document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll('.topnav a[href^="#"]');
    links.forEach(function(link) {
      link.addEventListener('click', function() {
        var x = document.getElementById("myTopnav");
        if (x.className.includes("responsive")) {
          x.className = "topnav";
        }
      });
    });
  });
  
//dark mode / light mode toggling
  var icon = document.getElementById("icon");
  icon.onclick = function() {
    document.body.classList.toggle("light-theme");
    var isLightTheme = document.body.classList.contains("light-theme");
    // Change the icon image based on the theme
    if (isLightTheme) {
      icon.src = "./Images/moon.png";
    } else {
      icon.src = "./Images/sun.png";
    }
  };
  