document.addEventListener('DOMContentLoaded', () =>
{
    var buttons = document.querySelectorAll('.deleteBtn');
    for (var button of buttons)
    {
        button.addEventListener('click', function ()
        {
            this.parentElement.parentElement.remove();
        });
    }
});