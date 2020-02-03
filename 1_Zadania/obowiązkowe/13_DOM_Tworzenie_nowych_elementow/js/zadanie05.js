document.addEventListener('DOMContentLoaded', () =>
{
    var buttons = document.querySelectorAll('.moveBtn');
    for (var button of buttons)
    {
        button.addEventListener('click', function ()
        {
            document.querySelector(this.parentElement.parentElement.id === 'list1' ? '#list2' : '#list1')
                .appendChild(this.parentElement);
        });
    }
});