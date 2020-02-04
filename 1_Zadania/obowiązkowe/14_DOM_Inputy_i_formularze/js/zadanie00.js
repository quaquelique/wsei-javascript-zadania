document.addEventListener('DOMContentLoaded', () =>
{
    var error =
        {
            element : null,
            event : null,
            write : message =>
            {
                var err = document.createElement('p');
                err.innerHTML = message;
                error.element.appendChild(err);

                if (error.element.children.length) error.event.preventDefault();
            },
            clear : () =>
            {
                while (error.element.children.length)
                {
                    error.element.firstChild.remove();
                }
            }
        };

    var form = document.querySelector('form');
    document.querySelector('.btn.btn-primary').addEventListener('click', event =>
    {
        error.element = document.querySelector('.error-message');
        error.event = event;
        error.clear();

        if (!form['email'].value.includes('@'))
        {
            error.write('Email musi posiadać znak @');
        }
        if (form['name'].value.length <= 6)
        {
            error.write('Twoje imię jest za krótkie');
        }
        if (form['surname'].value.length <= 6)
        {
            error.write('Twoje nazwisko jest za krótkie');
        }
        if (form['pass1'].value !== form['pass2'].value || form['pass1'].value === '')
        {
            error.write('Hasła nie są takie same lub puste');
        }
        if (!form['agree'].checked)
        {
            error.write('Musisz zaakceptować warunki');
        }
    });
});