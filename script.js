function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

 /* Projects */

 document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.projects-container');
    const projects = document.querySelectorAll('.project-card');
    const projectWidth = projects[0].offsetWidth; // Width of a single project card
    const totalWidth = projectWidth * projects.length; // Total width of all projects

    document.querySelector('.right-button').addEventListener('click', function() {
        if (container.scrollLeft < (totalWidth - projectWidth * 3)) { // Check if it's possible to scroll right
            container.scrollBy({ left: projectWidth, behavior: 'smooth' });
        } else {
            container.scrollTo({ left: 0, behavior: 'smooth' }); // Loop back to the start
        }
    });

    document.querySelector('.left-button').addEventListener('click', function() {
        if (container.scrollLeft > 0) { // Check if it's possible to scroll left
            container.scrollBy({ left: -projectWidth, behavior: 'smooth' });
        } else {
            container.scrollTo({ left: totalWidth - projectWidth * 3, behavior: 'smooth' }); // Loop to the end
        }
    });
});

// Profile 
const phrases = ["Web Developer", "Digital Marketer", "Social Media Manager"];
let currentPhrase = 0;
let currentCharacter = 0;
let textElement = document.querySelector('.text-content');
let cursorElement = document.querySelector('.cursor');

function type() {
    if (currentCharacter < phrases[currentPhrase].length) {
        textElement.textContent += phrases[currentPhrase].charAt(currentCharacter);
        currentCharacter++;
        setTimeout(type, 120); // Delay between each character
    } else {
        setTimeout(erase, 1500); // Delay before starting to erase text
    }
}

function erase() {
    if (currentCharacter > 0) {
        textElement.textContent = phrases[currentPhrase].substring(0, currentCharacter-1);
        currentCharacter--;
        setTimeout(erase, 80); // Delay between each character being erased
    } else {
        currentPhrase = (currentPhrase + 1) % phrases.length;
        setTimeout(type, 1200); // Delay before typing next phrase
    }
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(type, 1000); // Initial delay before typing starts
});


particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#000000"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#000000","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;

// Astronaut Pic 

