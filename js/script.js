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
    console.log(element)
}

parameters.forEach(activeProduct)