document.addEventListener('DOMContentLoaded', () =>
{
    var first = new Array();
    first.push(document.querySelector('.first'));
    first.push(first[0].firstElementChild);
    first.push(first[0].children[2]);

    var second = new Array();
    second.push(document.querySelector('#second'));
    second.push(second[0].parentElement);
    second.push(second[0].children[3]);

    var third = new Array();
    third.push(document.querySelector('[data-ex="third"]'));
    third.push(third[0].parentElement.parentElement);
    third.push(third[0].lastElementChild);
    third.push(third[0].firstElementChild);
    third.push(Math.floor(third[0].children / 2));

    var forth = new Array();
    forth.push(document.querySelector('div .forth'));
    forth.push(forth[0].parentElement);
    forth.push(forth[0].querySelector('article'));
    forth.push(forth[0].querySelectorAll('p')[1]);

    console.log({ first, second, third, forth });
});