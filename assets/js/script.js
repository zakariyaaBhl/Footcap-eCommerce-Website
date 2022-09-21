'use strict';

/**
 * ============================== Variables
 */
const navbar = document.querySelector('[data-navbar]');
const overlay = document.querySelector ('[data-overlay]')
const navToggler = document.querySelectorAll('[data-nav-toggler]');
const navLinks = document.querySelector('[data-nav-link]');

const header = document.querySelector('[data-header]');
const goTopBtn = document. querySelector('[data-go-top]');

/**
 * ============================== Navbar Toggle Event
 */
addEventOnElem(navToggler, 'click', navToggle);
addEventOnElem(navLinks, 'click', navClose);


/**
 * ============================== Header & back top btn active when scroll down to 100px 
 */
addEventOnElem(window, 'scroll', headerActive);











/**
 * ============================== Useful Function ==============================
 */

 function addEventOnElem (elem, type, callback){
    if (elem.length > 1) {
        elem.forEach(element => {
            element.addEventListener(type, callback);
        });
    } else {
        elem.addEventListener(type, callback);
    }
}

function navToggle(){
    navbar.classList.toggle('active');
    overlay.classList.toggle('active');
}

function navClose(){
    navbar.classList.remove('active');
    overlay.classList.remove('active');
}

function headerActive (){
    if(window.scrollY > 80){
        header.classList.add('active');
        goTopBtn.classList.add('active');
    } else {
        header.classList.remove('active');
        goTopBtn.classList.remove('active');
    }
}
