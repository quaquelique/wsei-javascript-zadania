document.addEventListener('DOMContentLoaded', () =>
{
    document.querySelector('[alt="Apple"]').alt = 'Os X';
    document.querySelector('[alt="Os X"]').style.display = 'none';
    document.querySelector('[alt="Ubuntu"]').style.display = 'none';

    var control = document.querySelector('.form-control');
    control.addEventListener('change', () =>
    {
        for (var img of document.querySelectorAll('img'))
        {
            switch (img.alt)
            {
                case control.value:
                    img.style.display = 'block';
                    break;
                default:
                    img.style.display = 'none';
            }
        }
    });
});