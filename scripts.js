
 // Navbar Dropdown effect
 document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function (dropdown) {
        const button = dropdown.querySelector('.dropbtn');
        const menu = dropdown.querySelector('.dropdown-menu');

         //Toggle dropdown menu on click
        button.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default anchor behavior
            menu.classList.toggle('show');
        });
    });

     //Close dropdown when clicking outside
    document.addEventListener('click', function (event) {
        const targetElement = event.target;

       dropdowns.forEach(function (dropdown) {
            const menu = dropdown.querySelector('.dropdown-menu');
            
           if (!dropdown.contains(targetElement)) {
                menu.classList.remove('show');  
            }
        });
   });

         



});

// Active for dropdown menu
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".dropdown").forEach((dropdown) => {
        let menu = dropdown.querySelector(".dropdown-menu");

        dropdown.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevents closing when clicking inside
            let isOpen = menu.classList.contains("open");

            // Close any open dropdowns
            document.querySelectorAll(".dropdown-menu.open").forEach((openMenu) => {
                openMenu.classList.remove("open");
                openMenu.style.maxHeight = null; // Reset height
            });
             // if statement to test scroll function
            if (!isOpen) {
                menu.classList.add("open");
                menu.style.maxHeight = menu.scrollHeight + "px"; // Smooth scroll effect
            }
        });
    });

    // Close dropdown if clicking outside
    document.addEventListener("click", function () {
        document.querySelectorAll(".dropdown-menu.open").forEach((menu) => {
            menu.classList.remove("open");
            menu.style.maxHeight = null;
        });
    });
});


//* Banner effects


// Hidden banner
let lastScrollTop = 0;
const banner = document.querySelector(".top-banner");

window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

   if(scrollTop > lastScrollTop) {
        banner.style.top = "-50px";
   } else {
        banner.style.top = "0";
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});




const menuToggle = document.querySelector('.menu-toggle');
const closeToggle = document.querySelector('.close-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.add('show');
  document.body.classList.add('nav-open');
});

closeToggle.addEventListener('click', () => {
  navLinks.classList.remove('show');
  document.body.classList.remove('nav-open');
});


let lastScrollY = window.scrollY;
const Navbar = document.getElementById('Navbar');

window.addEventListener('scroll', () => {
    if(window.scrollY > lastScrollY) {
        Navbar.style.top = '-40px';
    } else {
        Navbar.style.top = '0';
    }
    lastScrollY = window.scrollY;
});















// Contact pop message
const contactForm = document.querySelector('form');
const popup = document.getElementById('popup-message');
const closeBtn = document.getElementById('close-popup');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault;

    const formData = new FormData(contactForm);
    fetch(contactForm.action, {
        method:contactForm.method,
        body: formData,
        header: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if(response.ok) {
            contactForm.reset();
          popup.classList.add('show');

        setTimeout(() => {
            popup.classList.remove('show');

            setTimeout(() => {
                popup.style.display = 'none';
            }, 500);
        }, 5000);

        } else {
            alert('Oops! something went wrong!');
        }
    }).catch(error => {
        alert('Your info was submitted!');
    });
});


closeBtn.addEventListener('click', function() {
   popup.classList.remove('show');
   setTimeout(()=> {
    popup.style.display = 'none';
   }, 500);
});




// Mobile Navbar



















