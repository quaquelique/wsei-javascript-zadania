document.addEventListener('DOMContentLoaded', () =>
{
    const boxes = document.querySelectorAll('.box');
    for (let box of boxes)
    {
        box.addEventListener('click', () =>
        {
            box.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        });
    }
});