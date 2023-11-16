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
  const contactForm = document.getElementById('contact_form'),
  
  contactMessage = document.getElementById('contact_message');

const sendEmail = (e) => {
  e.preventDefault();

  // serviceID - TemplateID - #form - publicKey
  emailjs.sendForm('service_glsneoo', 'template_781boky', '#contact_form', 'pelVgzphd1eK6XQ3N')
      .then(() => {
          // show sent message
          contactMessage.textContent = 'Message sent successfully ✅';

          // remove sent message
          setTimeout(() => {
              contactMessage.textContent = '';
          }, 5000);

          // clear input fields
          contactForm.reset();
      }, () => {
          // show error message
          contactMessage.textContent = 'Please Try Again Later ❌';
      });
}

contactForm.addEventListener('submit', sendEmail);
