/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const navbar_parent = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
let timingVar;
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// Function to hide the navigation bar
function startTimer(){
    if (scrollY >= 100){
        timingVar = setTimeout(function(){
            navbar_parent.classList.add('disappear');
        },3000);
    }
}

function stopTimer(){
    clearTimeout(timingVar);
    navbar_parent.classList.remove('disappear');
}
// Function to stop timer if the mouse is over the navigation bar.
navbar_parent.onmouseover = function(){
    stopTimer();
}

// Function to fetch the Active Element/Section
function getActiveElement(){
    let scroll = window.scrollY;
    if (scrollY < 600){
        return document.getElementById('section1');
    }
    let el = Math.round((scroll-180)/700 + 1);
    return document.getElementById('section'+el);
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav    
function buildNav(){
    for(let item of sections){
        const navlink = document.createElement('li');
        navlink.dataset.nav = item.id;
        navlink.classList.add('menu__link');
        if(navlink.dataset.nav === 'section1'){
            navlink.classList.add('active__link');
        }
        navlink.textContent = item.dataset.nav;
        navbar_parent.appendChild(navlink);
    }
}

// Add class 'active' to section when near top of viewport
function addActive(){    
    window.addEventListener('scroll', function(event){
        stopTimer();
        // Get the element in focus using scroll 
        const activeElement = getActiveElement();
        const actclassName = "your-active-class";
        for (let item of sections){
            if(item.classList.contains(actclassName)){        
                // Remove active status from all other sections 
                item.classList.remove(actclassName)
            }
        }
        // Add active status to the active section class
        activeElement.classList.add(actclassName);
        // To add the active styling to the active nav link 
        const navbar = this.document.querySelectorAll('.menu__link');
        for(let link of navbar){
            // Add active style to the link corresponding to the section in focus
            if(link.dataset.nav === activeElement.id){
                link.classList.add('active__link');                   
            }
            // Remove any other link having class as active__link
            else if(link.classList.contains('active__link')){
                link.classList.remove('active__link');
            }            
        }
        // To make Nav Element dissaper if not scrolling
        startTimer();
    })
}
var timer = null;

// Scroll to anchor ID using scrollTO event
function scrollToClick(){
    navbar_parent.addEventListener('click', function(event){
        // Get the element that was clicked
        const scrollElementId = event.target.dataset.nav;        
        const scrollelement = document.getElementById(scrollElementId);
        scrollelement.scrollIntoView();
    });
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNav();

// Scroll to section on link click
scrollToClick();

// Set sections as active
addActive();


