const progressBar = document.querySelector('#progress-bar');
const section = document.querySelector(".container");

const saluteTextContainer = document.querySelector(".saluteTextContainer")
const saluteImageContainer = document.querySelector(".saluteImageContainer")
// const authorName = document.querySelector(".name")
const jobTitleContainers = document.querySelectorAll(".jobTitleContainer")
const jobSkill = document.querySelectorAll("jobSkills")
const projectsTitle = document.querySelector(".projectsTitle")
const phones = document.querySelectorAll(".phone")
const laptop = document.querySelector(".laptop")




const animateProgressBar = () => {
    let scrollDistance = -section.getBoundingClientRect().top;
    let progressWidth = (scrollDistance / (section.getBoundingClientRect().height - document.documentElement.clientHeight)) * 100;
    
    // console.log(progressWidth);
    let value = Math.floor(progressWidth);
    progressBar.style.width = value + "%";
    if (value < 0) {
        progressBar.style.width = "0%";
    }
}

window.addEventListener("scroll", animateProgressBar);

window.addEventListener("scroll",()=>{
    // console.log(window.scrollY);
   let offsetY= window.scrollY
    saluteTextContainer.style.transform= `translateY(${offsetY * 0.1}px)`
    saluteImageContainer.style.transform= `translate(${offsetY * 0.4}px, ${offsetY * 0.7}px)` //so we can transform the subject in both axis(x, y ) in once using this technique
    // authorName.style.transform= `translateX(${offsetY * 0.04}px )` 
    jobTitleContainers[0].style.backgroundPositionY = `${offsetY * 0.5}px`
    jobTitleContainers[1].style.backgroundPositionY = `${-offsetY * 0.5}px`
    // jobTitles[0].style.transform= `translateX(calc(120vh - ${offsetY}px ))` 
    // jobSkill.style.transform= `translateX(calc(-180vh + ${offsetY}px ))` 
    projectsTitle.style.transform= `translateY(calc(300vh - ${offsetY}px ))` 
    phones[0].style.transform= `translateX(calc(400vh - ${offsetY}px ))` 
    laptop.style.transform= `translateX(calc(520vh - ${offsetY}px ))` 
    phones[1].style.transform= `translateX(calc(650vh - ${offsetY}px ))` 
    
})


// its for navbar navigation
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            let sectionId = link.getAttribute('href');
            scrollToSection(sectionId);
        });
    });
});

function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    const sectionPosition = section.getBoundingClientRect().top;
    window.scrollBy({
        top: sectionPosition,
        behavior: 'smooth'
    });
}

window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

//add hamburger 
var hamburger = document.querySelector('.hamburger');
function toggleNav() {
  hamburger.classList.toggle('change');
  var navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

//remove hamburger menu
// Get the main content and navbar elements
var navbar = document.querySelector('.navbar');

// Add an event listener to the main content that will listen for clicks
section.addEventListener('click', function(e) {
  // Check if the click was inside the navbar
  if(navbar.contains(e.target)) {
    // Do nothing if the click was inside the navbar
    return;
  }
  // If the click was outside the navbar, close the navlinks section
    var navLinks = document.querySelector('.nav-links');
    
    if (navLinks.classList.contains('active')) {
    navLinks.classList.remove('active');
    hamburger.classList.toggle('change');
  }
});
