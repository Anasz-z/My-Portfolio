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




