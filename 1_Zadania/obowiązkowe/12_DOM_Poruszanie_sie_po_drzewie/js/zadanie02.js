document.addEventListener('DOMContentLoaded', () =>
{
    var buttons = document.querySelectorAll('.button');
    for (var button of buttons)
    {
        button.addEventListener('click', function ()
        {
            this.parentElement.style.backgroundColor = `#${Math.floor(Math.random() * 16777215)}`;
        });
    }
});