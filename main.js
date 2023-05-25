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

const sr = ScrollReveal({
    distance: "65px",
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal(".landing-content", {delay: 200, origin: "top"});
sr.reveal(".landing img", {delay: 600, origin: "right"});
sr.reveal(".about-content", {delay: 50, origin: "left"});
