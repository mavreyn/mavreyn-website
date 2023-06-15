/*
 * 
 * Hoping to use THREE.js in here some place
 * Main file for my website
 * 
 * Maverick Reynolds
 * 05.04.2023
 * 
 * 
 * 
*/

// Typing animation for the landing page
var doTypingAnimationAbout = true
if (doTypingAnimationAbout) {
    var typing = new Typed(".about-words", {
        strings: ["Mathematics", "Astronomy", "Physics", "Comp Sci"],
        loop: true,
        typeSpeed: 70,
        backSpeed: 40,
        backDelay: 2500
    })
}

// Scroll reveal animations
const sr = ScrollReveal({
    distance: "65px",
    duration: 2600,
    delay: 450,
    reset: true
});
sr.reveal(".landing-content", {delay: 200, origin: "top"});
sr.reveal(".landing img", {delay: 600, origin: "right"});
sr.reveal(".about-content", {delay: 50, origin: "left"});


// Toggle the menu on mobile / small screens
const navlist = $('.navbar');
const menuIcon = $('#menu-icon');
//IIFE event listener
menuIcon.click(() => {
    menuIcon.toggleClass('bx-x');
    navlist.toggleClass('open');
})


// Cool text animation
//https://codepen.io/Hyperplexed/pen/mdjPzgM
const enhance = id => {
    const element = document.getElementById(id);
    text = element.innerText.split("");

    element.innerText = "";
    text.forEach(letter => {
        const span = document.createElement("span");
        span.className = 'letter'
        span.innerText = letter;
        element.appendChild(span);
    })
}
enhance("astronomy")
enhance("computer-science")
enhance("math")
enhance("desmos")
