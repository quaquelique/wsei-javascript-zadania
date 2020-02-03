document.addEventListener('DOMContentLoaded', () =>
{
    var buttons = document.querySelectorAll('.button');
    for (var i = 0; i < buttons.length; ++i)
    {
        buttons[i].addEventListener('click', function ()
        {
            var box = this.nextElementSibling;
            console.log(box);
            if (box !== null)
            {
                if (box.style.visibility === 'visible') box.style.visibility = 'hidden';
                else box.style.visibility = 'visible';
            }
        });
    }
});