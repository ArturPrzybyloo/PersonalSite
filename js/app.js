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


//Make slider
//Select carousel slide
const carouselSlide = document.querySelector(".carousel-slide");
//Select images
const carouselImages = document.querySelectorAll(".carousel-slide img");
//Select Buttons
const prevButton = document.querySelector("#prevBtn");
const nextButton = document.querySelector("#nextBtn");
//Counter
let counter = 1;
const size = carouselImages[0].clientWidth;
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Add Next Button action
nextButton.addEventListener('click', () => {
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

})

//Add Previous Button action
prevButton.addEventListener('click', () => {

    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

})

//Reset slider after loop
carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})