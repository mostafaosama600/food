

const accordionItems = document.querySelectorAll('.questions__item')
accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.questions__header')
    accordionHeader.addEventListener('click', () =>{
        const openItem = document.querySelector('.accordion-open')
        toggleItem(item)
        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})
const toggleItem = (item) =>{
    const accordionContent = item.querySelector('.questions__content')
    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }
}


/*=============== SHOW MENU ===============*/


const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)






function slider() {
    let slides = document.querySelectorAll(".slide"),
        slider = document.querySelector(".slider"),
        last = slider.lastElementChild,
        first = slider.firstElementChild,
        btn = document.querySelectorAll(".btn");

    slider.insertBefore(last, first);

    btn.forEach(btn => {
        btn.addEventListener("click", movement);
    });
    setInterval(function()
    {
        movement({target:{id:"next"}});
    }, 3000);
    function movement(e) {
        slider = document.querySelector(".slider");
        last = slider.lastElementChild;
        first = slider.firstElementChild;

        const activeSlide = document.querySelector(".active");

        if (e.target.id === "next") {
        slider.insertBefore(first, last.nextSibling);

        activeSlide.classList.remove("active");
        activeSlide.nextElementSibling.classList.add("active");
        } else {
        slider.insertBefore(last, first);
        activeSlide.classList.remove("active");
        activeSlide.previousElementSibling.classList.add("active");
        }
    }
}
slider();


function togglePop(){
    var PopUpCustomize = document.querySelector(".pop_up_customize")
    PopUpCustomize.classList.toggle("active")
}

// START ORDARING 1 POP UP


var Xlogin1 = document.getElementById("LOG_IN_PAGE1");
var Ysign1 = document.getElementById("SIGN_IN_PAGE1");
var Zclickable1 = document.getElementById("btn_Clickable1");
function SIGN_IN_PAGE1(){
    Xlogin1.style.left = "-400px"
    Ysign1.style.left = "50px"
    Zclickable1.style.left = "110px" 
}

function LOG_IN_PAGE1(){
    Xlogin1.style.left = "50px"
    Ysign1.style.left = "450px"
    Zclickable1.style.left = "0" 
}

function togglePopOrdaring(){
    var heroSIGN1 = document.querySelector(".heroSIGN1")
    heroSIGN1.classList.toggle("active1")
}
// END ORDARING 1 POP UP

// START Trick For Scrolling My Small Cart At RIGHT 

let progress = document.getElementById("progressbarYY");
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    // progress.style.height = progressHeight + "%";
}

// const slider = document.querySelector('.slider-innerX');
// const progressBar = document.querySelector('.prog-bar-innerX');

// let sliderGrabbed = false;

// slider.parentElement.addEventListener('scroll', (e) => {
//     progressBar.style.width  = `${getScrollPercentage()}%`
// })

// slider.addEventListener('mousedown', (e) => {
//     sliderGrabbed = true;
//     slider.style.cursor = 'grabbing';
// })

// slider.addEventListener('mouseup', (e) => {
//     sliderGrabbed = false;
//     slider.style.cursor = 'grab';
// })

// slider.addEventListener('mouseleave', (e) => {
//     sliderGrabbed = false;
// })

// slider.addEventListener('mousemove', (e) => {
//     if(sliderGrabbed){
//         slider.parentElement.scrollLeft -= e.movementX;
//     }
// })

// slider.addEventListener('wheel', (e) =>{
//     e.preventDefault()
//     slider.parentElement.scrollLeft += e.deltaY;
// })

// function getScrollPercentage(){
//    return ((slider.parentElement.scrollLeft / (slider.parentElement.scrollWidth - slider.parentElement.clientWidth) ) * 100);
// }