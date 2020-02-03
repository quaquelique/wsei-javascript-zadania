document.addEventListener('DOMContentLoaded', () =>
{
    var button = document.querySelector('.button');
    var list = document.querySelector('.menu');

    button.addEventListener('click', () =>
    {
        var count = list.querySelectorAll('li').length;
        var element = document.createElement('li');
        element.innerHTML = `Element ${count + 1} - w chwili dodania było ${count} elementów`;
        list.appendChild(element);
    });
});