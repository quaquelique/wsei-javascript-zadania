document.addEventListener('DOMContentLoaded', () =>
{
    var inputs = document.querySelectorAll('input');

    var button = document.querySelector('.button');
    button.addEventListener('click', () =>
    {
        for (let input of inputs)
        {
            if (input.value.length < 1)
            {
                alert('Proszę podać wszystkie dane.');
                return;
            }
        }

        var record = document.createElement('tr');
        for (let input of inputs)
        {
            var property = document.createElement('td');
            property.innerHTML = input.value;
            document.querySelector('#orders').appendChild(property);
        }
    });
});