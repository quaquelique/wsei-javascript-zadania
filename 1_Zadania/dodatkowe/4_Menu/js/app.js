document.addEventListener('DOMContentLoaded', () =>
{
    var elements = document.querySelectorAll('.nav>ul>li');

    for (var element of elements)
    {
        element.addEventListener('mouseover', function ()
        {
            var sub = this.querySelector('ul');
            if (sub !== null) sub.style.display = 'block';
        });
        element.addEventListener('mouseout', function ()
        {
            var sub = this.querySelector('ul');
            if (sub !== null) sub.style.display = 'none';
        });
    }
});