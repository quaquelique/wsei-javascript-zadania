document.addEventListener('DOMContentLoaded', () =>
{
    document.querySelector('.button').addEventListener('click', function ()
    {
        for (var element of document.querySelectorAll('.list li'))
        {
            element.remove();
        }
    });
});