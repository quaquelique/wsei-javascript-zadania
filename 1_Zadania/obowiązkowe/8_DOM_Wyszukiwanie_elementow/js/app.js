// 8. DOM - getting elements of the HTML page.

document.addEventListener("DOMContentLoaded", function ()
{
    // Zadanie 0
    const title = document.getElementsByClassName('title')[0];

    function getDataAnimation(element)
    {
        return element.getAttribute('data-animation')
    }
    console.log(getDataAnimation(title));

    // Zadanie 1
    const home = document.getElementById('home');
    // const home = document.querySelector('#home');
    const li = document.querySelector('[data-direction]');
    const block = document.querySelector('.block');

    console.log({ home, li, block });

    // Zadanie 2
    const lisInNavs = document.querySelectorAll('nav li');
    const psInDivs = document.querySelectorAll('div p');
    const divsInArticles = document.querySelectorAll('article div');

    console.log({ lisInNavs, psInDivs, divsInArticles });

    // Zadanie 3
    const article = document.querySelector('article.first');
    const h1 = article.querySelectorAll('h1');

    console.log(h1);
    console.log(h1.length);
});
