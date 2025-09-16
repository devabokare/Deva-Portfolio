 // Function to set the theme and update UI
 function setTheme(theme) {
    document.body.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
    var switchThemeBtn = document.getElementById('switchTheme');
    if (switchThemeBtn) {
        switchThemeBtn.innerHTML = theme === 'dark' ?  '<i class="bi bi-sun-fill"></i>' : '<i class="bi bi-moon-stars-fill"></i>';
    }
    //console.log(`Switched to ${theme} theme`);
}

var currentTheme = localStorage.getItem('theme') || 'dark';
setTheme(currentTheme);

// Event listener for the switch theme button
var switchThemeBtn = document.getElementById('switchTheme');
if (switchThemeBtn) {
    switchThemeBtn.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(currentTheme);
    });
}

//AOS Initiliaze
AOS.init();

// Fixed Header & back to top button on Scroll
window.addEventListener('scroll', () => {
    // fixed header
    const header = document.getElementById('header');
    if (window.scrollY > 30 && !header.classList.contains('fixed-top')) {
        header.classList.add('fixed-top');
        document.getElementById('offcanvasNavbar').classList.add('fixedHeaderNavbar');
    } else if (window.scrollY <= 30 && header.classList.contains('fixed-top')) {
        header.classList.remove('fixed-top');
        document.getElementById('offcanvasNavbar').classList.remove('fixedHeaderNavbar');
    }

    //backtotop
    const backToTopButton = document.getElementById("backToTopButton");
    if (window.scrollY > 400 && backToTopButton.style.display === 'none') {
        backToTopButton.style.display = 'block';
    } else if (window.scrollY <= 400 && backToTopButton.style.display === 'block') {
        backToTopButton.style.display = 'none';
    }
});


//jumping to top function
function scrollToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//Testimonial Slider
$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:3,
        nav:true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:2,
            },
            1170:{
                items:3,
            }
        }
    });
});

// Contact form submission
document.addEventListener('DOMContentLoaded', function() {
    var contactForm = document.querySelector('#contact form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        // If form has data-mailto, use mailto flow
        if (contactForm.getAttribute('data-mailto') === 'true') {
            e.preventDefault();

            var to = contactForm.getAttribute('data-mailto-to') || '';
            var name = document.getElementById('name')?.value?.trim() || '';
            var email = document.getElementById('email')?.value?.trim() || '';
            var subject = document.getElementById('subject')?.value?.trim() || '';
            var message = document.getElementById('message')?.value?.trim() || '';

            if (!name || !email || !subject || !message) {
                alert('Please fill all required fields.');
                return;
            }

            var mailtoSubject = encodeURIComponent('[Portfolio] ' + subject);
            var mailtoBody = encodeURIComponent(
                'Name: ' + name + '\n' +
                'Email: ' + email + '\n\n' +
                message
            );

            var mailtoLink = 'mailto:' + to + '?subject=' + mailtoSubject + '&body=' + mailtoBody;
            window.location.href = mailtoLink;
        }
    });
});
