document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */

    // Zadanie 0
    let elements = document.querySelectorAll('.ex5 li');
    for (let i = 0; i < elements.length; ++i)
    {
        if (i % 2 === 0) elements[i].style.backgroundColor = 'green';
        if (i % 3 === 0) elements[i].style.textDecoration = 'underline';
    }
    elements[4].classList.add('big');

    // Zadanie 1
    let chrome = document.getElementsByClassName('chrome')[0];
    let edge = document.getElementsByClassName('edge')[0];
    let firefox = document.getElementsByClassName('firefox')[0];

    chrome.previousElementSibling.innerHTML = 'Google Chrome';
    chrome.nextElementSibling.href = 'https://www.google.com/intl/en_us/chrome/';
    chrome.nextElementSibling.innerHTML = 'Google Chrome';
    chrome.style.width = '100px';

    edge.style.backgroundImage = 'url(./assets/img/edge.png)';
    edge.nextElementSibling.href =
        'https://support.microsoft.com/en-us/help/4501095/download-the-new-microsoft-edge-based-on-chromium';

    firefox.previousElementSibling.innerHTML = 'Mozilla Firefox';
    firefox.style.backgroundImage = 'url(./assets/img/firefox.png)';
    firefox.nextElementSibling.href = 'https://www.mozilla.org/en-US/firefox/new/';
    firefox.nextElementSibling.innerHTML = 'Mozilla Firefox';

    // Zadanie 2
    let favorites = document.getElementsByClassName('exercise ex2')[0].querySelectorAll('span');
    favorites[0].innerHTML = 'Karol Makowski';
    favorites[1].innerHTML = 'FF007F';
    favorites[2].innerHTML = 'Gulasz';

    // Zadanie 3
    let menu = document.querySelector('.ex3 ul');
    menu.classList.add('menu');

    let lElements = menu.getElementsByTagName('li');
    for (let lElement of lElements)
    {
        lElement.classList.add('menuElement');
        lElement.classList.remove('error');
    }

    // Zadanie 4
    let id = 0;
    let values =
        document.getElementsByClassName('exercise ex4')[0].getElementsByTagName('li');
    for (let value of values)
    {
        value.setAttribute('data-id', ++id);
    }
});