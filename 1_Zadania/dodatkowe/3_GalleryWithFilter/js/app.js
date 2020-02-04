document.addEventListener('DOMContentLoaded', () =>
{
    var images = document.querySelectorAll('img');
    var hide = document.querySelector('#hideButton');
    var show = document.querySelector('#showButton');
    var input = document.querySelector('input');

    hide.addEventListener('click', () =>
    {
        var text = input.value;
        input.value = '';

        for (var image of images)
        {
            if (image.dataset.tag.indexOf(text) !== -1)
            {
                image.classList.add('invisible');
            }
        }
    });

    show.addEventListener('click', () =>
    {
        var text = input.value;
        input.value = '';

        for (var image of images)
        {
            if (image.dataset.tag.indexOf(text) !== -1)
            {
                image.classList.remove('invisible');
            }
        }
    });
});