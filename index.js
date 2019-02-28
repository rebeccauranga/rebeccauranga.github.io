var hideSocialHeight = 400;

/** this is a function declaration  */
function onScroll(event) {
    var socialElement = document.querySelector("#social");
    if (window.scrollY > hideSocialHeight) {
        socialElement.classList.add('social-hidden');
    } else {
        socialElement.classList.remove('social-hidden');
    }
}

function onLoad() {
    showNameLogo();
}


function showNameLogo() {
    var nameLogos = document.querySelectorAll('.name-logo img');
    nameLogos.forEach(function(element) {
        element.classList.add('name-logo-ease-in');
    });
  
}

window.addEventListener('scroll', onScroll);
window.addEventListener('load', onLoad);


