document.addEventListener('DOMContentLoaded', () =>
{
    let counters = new Array(0, 0, 0);
    const spans = document.getElementsByTagName('button');
    for (let i = 0; i < spans.length; ++i)
    {
        spans[i].addEventListener('click', function ()
        {
            this.nextElementSibling.firstElementChild.innerHTML = (++counters[i]).toString();
        });
    }
});