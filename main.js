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
