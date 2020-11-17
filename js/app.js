//Get burger 
const menuIcon = document.querySelector(".hamburger-menu");
//Get navbar
const navbar = document.querySelector(".navbar");


// Add listiner on click
menuIcon.addEventListener("click", () => {

    navbar.classList.toggle("change");

});

window.onscroll = function () {
    myFunction()
};



// Get the header
const header = document.querySelector(".logo");

// Get the offset position of the navbar
const sticky = header.offsetTop;

//Add sticky position to header
function myFunction() {

    header.classList.add("sticky");

}


//Get the button
const toTop = document.querySelector(".to-top");
//Add class active on scroll
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 50) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})

//Get first triangle
const firstTriangle = document.querySelector(".first-triangle-path")
//Add class active on scroll
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 2) {
        firstTriangle.classList.add("active");
    } else {
        firstTriangle.classList.remove("active");
    }
})

//Get second triangle
const secondTriangle = document.querySelector(".second-triangle-path")
//Add class active on scroll
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 2550) {
        secondTriangle.classList.add("active");
    } else {
        secondTriangle.classList.remove("active");
    }
})

//Get slogan
const slogan = document.querySelector(".slogan");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 2550) {
        slogan.classList.add("active");
    } else {
        slogan.classList.remove("active");
    }
})


//Function to send an email on click send button
$(document).ready(function () {
    $('.contact-form-btn').click(function (event) {

        console.log('clicked')
        //Get variables fromform
        var email = $('#email').val();
        var name = $('#name').val();
        var msg = $('#message').val();
        var phone = $('#phone').val();
        var StatusElm = $('.status');
        StatusElm.empty();



        //Form Validations
        if (email.includes('@') && email.includes('.') && email.length > 5 && email !== null) {
            console.log('Correct')
        } else {
            event.preventDefault();
            StatusElm.append('<div>Email is invalid.</div>');
        }



        if (name.length > 1 && name !== null) {
            console.log('Correct')
        } else {
            event.preventDefault();
            StatusElm.append('<div>Fill up a name.</div>');
        }



        if (phone.length > 1) {
            console.log('Correct')
        } else {
            event.preventDefault();
            StatusElm.append('<div>Fill up a phone number.</div>');
        }



        if (msg.length >= 10) {
            console.log('Correct')
        } else {
            event.preventDefault();
            StatusElm.append('<div>Fill up your message.</div>');
        }
    })





})