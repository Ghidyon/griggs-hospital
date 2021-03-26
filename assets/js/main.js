// Call display-service div from DOM
const displayService = document.getElementById('display-service');

// Call service boxes container div from DOM
const boxContainer = document.querySelector('.services-grid');

// Call all service descriptions into an array
const serviceContents = document.getElementsByClassName('service-content');

// Call all service boxes into an array
const serviceBoxes = boxContainer.getElementsByClassName('services-box');

// Loop through array of service boxes and add function to display service contents on each click
for (let i = 0; i < serviceBoxes.length; i++) {
    serviceBoxes[i].addEventListener('click', () => {
        boxContainer.querySelector('.active').classList.remove('active');
        serviceBoxes[i].classList.add('active');
        displayService.innerHTML = serviceContents[i].innerHTML;
    });
}