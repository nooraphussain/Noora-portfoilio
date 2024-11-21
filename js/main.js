
//document.title = "Hehe";
// console.log(document);

document.getElementById('contactForm').addEventListener('submit', function (event) {
    let isValid = true;
    let errorMessages = [];

    // Get form elements
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const project = document.getElementById('project');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');

    // Clear previous error messages
    document.querySelectorAll('.error').forEach(error => error.remove());

    // Name validation
    if (name.value.trim() === '') {
        isValid = false;
        errorMessages.push('Name is required');
        showError(name, 'Name is required');
    }

    // Email validation
    if (email.value.trim() === '' || !validateEmail(email.value)) {
        isValid = false;
        errorMessages.push('Please enter a valid email');
        showError(email, 'Please enter a valid email');
    }

    // Phone validation
    if (phone.value.trim() === '') {
        isValid = false;
        errorMessages.push('Phone is required');
        showError(phone, 'Phone is required');
    }

    // Project validation
    if (project.value.trim() === '') {
        isValid = false;
        errorMessages.push('Project is required');
        showError(project, 'Project is required');
    }

    // Subject validation
    if (subject.value.trim() === '') {
        isValid = false;
        errorMessages.push('Subject is required');
        showError(subject, 'Subject is required');
    }

    // Message validation
    if (message.value.trim() === '') {
        isValid = false;
        errorMessages.push('Message is required');
        showError(message, 'Message is required');
    }

    if (!isValid) {
        event.preventDefault(); // Prevent form submission
        alert(errorMessages.join('\n'));
    }
});

function showError(input, message) {
    const error = document.createElement('div');
    error.classList.add('error');
    error.style.color = 'red';
    error.textContent = message;
    input.parentElement.appendChild(error);
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}

(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();



   // testimonial carousel
   $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    items: 1,
    smartSpeed: 1500,
    dots: true,
    dotsData: true,
    loop: true,
    margin: 25,
    nav : true,
    navText : [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>'
    ]
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });


   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


})(jQuery);



