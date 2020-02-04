document.addEventListener('DOMContentLoaded', () =>
{
    var next = document.querySelector('#nextPicture');
    var prev = document.querySelector('#prevPicture');
    var elements = document.querySelectorAll('li');
    var index = 0;

    elements[index].classList.add('visible');

    next.addEventListener('click', () =>
    {
         elements[index].classList.remove('visible');
         if (++index >= elements.length) index = 0;
         elements[index].classList.add('visible');
    });

    prev.addEventListener('click', () =>
    {
        elements[index].classList.remove('visible');
        if (--index < 0) index = elements.length - 1;
        elements[index].classList.add('visible');
    });
});