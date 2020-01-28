document.addEventListener('DOMContentLoaded', () =>
{
    let counter = 0;
    const buttons = document.getElementsByTagName('button');
    for (let i = 0; i < buttons.length; ++i)
    {
        buttons[i].addEventListener('click', () =>
        {
            document.querySelector('.counter').innerHTML = (++counter).toString();
        });
    }
});