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
    const response = document.getElementById(controls)

    response.classList.toggle('active')

    const active = response.classList.contains('active')
    question.setAttribute('aria-expanded', active)
    
    console.log(question)
}

function questionsEvent(question) {
    question.addEventListener('click', activeQuestion)
}

questions.forEach(questionsEvent)