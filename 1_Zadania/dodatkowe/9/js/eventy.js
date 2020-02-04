var links = document.querySelectorAll('a');
var portal = links[0];
var text = links[1];

portal.addEventListener('click', function ()
{
    this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'none' ? 'block' : 'none';
});

text.addEventListener('mouseenter', function ()
{
    this.nextElementSibling.style.display = 'block';
});

text.addEventListener('mouseleave', function ()
{
    this.nextElementSibling.style.display = 'none';
});