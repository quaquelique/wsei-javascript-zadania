document.addEventListener('DOMContentLoaded', () =>
{
    var form = document.querySelector('form');
    document.querySelector('.btn.btn-primary').addEventListener('click', event =>
    {
        event.preventDefault();

        if (form['team1'].value === form['team2'].value ||
            Number.parseInt(form['points1'].value) < 0 ||
            Number.parseInt(form['points2'].value) < 0) return;

        var record = document.createElement('tr');
        var inputs = new Array(form['team1'].value,
                               form['team2'].value,
                               `${form['points1'].value} - ${form['points2'].value}`);
        for (var input of inputs)
        {
            var information = document.createElement('td');
            information.innerHTML = input;
            record.appendChild(information);
        }
        document.querySelector('.table.table-bordered').appendChild(record);
    });
});