// Active menu links

const  links = document.querySelectorAll('.header-menu a')
function linkActive(link) {
    const url = location.href;
    const href = link.href;
    
    if (url.includes(href)) {
        link.classList.add("active");
    }
}

links.forEach(linkActive);

// Active budget items

const parameters = new URLSearchParams(location.search);

function activeProduct(parameter) {
    const element = document.getElementById(parameter)
    if (element) {
        element.checked = true;
    }
    console.log(element)
}

parameters.forEach(activeProduct)

// Common Questions

const questions = document.querySelectorAll('.questions button')

function activeQuestion (event) {
    const question = event.currentTarget;
    const controls = question.getAttribute('aria-controls');
    const response = document.getElementById(controls);

    response.classList.toggle('active');

    const active = response.classList.contains('active');
    question.setAttribute('aria-expanded', active);
    
}

function questionsEvent(question) {
    question.addEventListener('click', activeQuestion);
}

questions.forEach(questionsEvent);

// Bikes Gallery

const gallery = document.querySelectorAll('.bike-img img');
const galleryImg = document.querySelector('.bike-img');

function alterImage(event) {
    const img = event.currentTarget;
    const media = matchMedia("(min-width: 1000px)").matches;
    if (media) {
    galleryImg.prepend(img);
}}

function galleryEvents(img) {
    img.addEventListener('click', alterImage);
}

gallery.forEach(galleryEvents);

// Animation

if (window.SimpleAnime) {
    new SimpleAnime();
}

