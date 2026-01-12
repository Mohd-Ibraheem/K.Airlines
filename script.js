const counters = document.querySelectorAll('.value');
const speed = 200;
let started = false;


const formatNumber = (num) => {
    return num.toLocaleString('en-IN');
};

const startCounter = () => {
    if (started) return;

    counters.forEach(counter => {
        const target = +counter.getAttribute('akhi');
        let count = 0;

        const updateCounter = () => {
            const increment = Math.ceil(target / speed);

            if (count < target) {
                count += increment;
                if (count > target) count = target;

                counter.innerText = formatNumber(count) + "+";
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = formatNumber(target) + "+";
            }
        };

        updateCounter();
    });

    started = true;
};

// scroll pe trigger
window.addEventListener('scroll', () => {
    const section = document.querySelector('.content');
    const sectionTop = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight - 100) {
        startCounter();
    }
});

// Form Validation start //

var fnameError = document.getElementById('name-error');
var lnameError = document.getElementById('lname-error');
var emailError = document.getElementById('email-error');
var phoneError = document.getElementById('phone-error');
var subjectError = document.getElementById('subject-error');
var areaError = document.getElementById('area-error');
var submitError = document.getElementById('submit-error');

function validateName() {
    var name = document.getElementById('contact-name').value.trim();

    if (name === '') {
        fnameError.innerHTML = 'First name is required';
        fnameError.style.color = "red";
        return false;
    }

    if (!/^[A-Za-z]+$/.test(name)) {
        fnameError.innerHTML = 'Only alphabets allowed';
        fnameError.style.color = "red";
        return false;
    }

    fnameError.innerHTML = '';
    return true;
}

function validateLName() {
    var lname = document.getElementById('lname').value.trim();

    if (lname === '') {
        lnameError.innerHTML = 'Last name is required';
        lnameError.style.color = "red";
        return false;
    }

    if (!/^[A-Za-z]+$/.test(lname)) {
        lnameError.innerHTML = 'Only alphabets allowed';
        lnameError.style.color = "red";
        return false;
    }

    lnameError.innerHTML = '';
    return true;
}

function validateEmail() {
    var email = document.getElementById('contact-email').value.trim();

    if (email === '') {
        emailError.innerHTML = 'Email is required';
        emailError.style.color = "red";
        return false;
    }

    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
        emailError.innerHTML = 'Invalid email format';
        emailError.style.color = "red";
        return false;
    }

    emailError.innerHTML = '';
    return true;
}

function validatePhone() {
    var phone = document.getElementById('contact-phone').value.trim();

    if (phone === '') {
        phoneError.innerHTML = 'Phone number is required';
        phoneError.style.color = "red";
        return false;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        phoneError.innerHTML = 'Phone number must be 10 digits';
        phoneError.style.color = "red";
        return false;
    }

    phoneError.innerHTML = '';
    return true;
}

function validateSubject() {
    var subject = document.getElementById('contact-subject').value.trim();

    if (subject === '') {
        subjectError.innerHTML = 'Subject is required';
        subjectError.style.color = "red";
        return false;
    }

    subjectError.innerHTML = '';
    return true;
}

function validateArea() {
    var area = document.getElementById('area').value.trim();

    if (area === '') {
        areaError.innerHTML = 'Message is required';
        areaError.style.color = "red";
        return false;
    }

    areaError.innerHTML = '';
    return true;
}

function validateForm() {
    if (!validateName() || !validateLName() || !validateEmail() || !validatePhone() || !validateSubject() || !validateArea()) {
        submitError.innerHTML = 'Please fix errors before submitting';
        submitError.style.color = 'orange';
        return false;


    }

    submitError.innerHTML = 'Your form has been submitted successfully';
    submitError.style.color = 'green';
    document.querySelector('.contact-form-inner').reset();
    return false;



}
document.getElementById('contact-name').addEventListener('input', validateName);
document.getElementById('lname').addEventListener('input', validateLName);
document.getElementById('contact-email').addEventListener('input', validateEmail);
document.getElementById('contact-phone').addEventListener('input', validatePhone);
document.getElementById('contact-subject').addEventListener('input', validateSubject);
document.getElementById('area').addEventListener('input', validateArea);



// Form validation end //

