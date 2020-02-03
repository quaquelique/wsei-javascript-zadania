document.addEventListener('DOMContentLoaded', () =>
{
    var divs = document.querySelectorAll('div');
    for (var div of divs)
    {
        div.addEventListener('mouseenter', function ()
        {
            var elements = this.querySelectorAll('li');
            for (var element of elements)
            {
                element.style.backgroundColor = 'green';
            }
            this.firstElementChild.firstElementChild.style.backgroundColor = 'red';
            this.firstElementChild.lastElementChild.style.backgroundColor = 'blue';
        });

        div.addEventListener('mouseleave', function ()
        {
            var elements = this.querySelectorAll('li');
            for (var element of elements)
            {
                element.style.backgroundColor = '';
            }
        })
    }
});