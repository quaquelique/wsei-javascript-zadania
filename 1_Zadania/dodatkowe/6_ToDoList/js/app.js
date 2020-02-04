document.addEventListener('DOMContentLoaded', () =>
{
    var tasks = document.querySelector('#taskList');

    var counter = document.querySelector('#counter');
    counter.innerHTML = `${0}`;
    window.addEventListener('click', () =>
    {
        var count = 0;
        for (var task of tasks.querySelectorAll('li'))
        {
            if (task.classList.length) continue;
            ++count;
        }
        counter.innerHTML = count.toString();
    });

    var add = document.querySelector('#addTaskButton');
    add.addEventListener('click', () =>
    {
        var input = document.querySelector('#taskInput');
        tasks.appendChild(newTask(input.value));
        input.value = '';
    });

    var remove = document.querySelector('#removeFinishedTasksButton');
    remove.addEventListener('click', () =>
    {
        for (var task of tasks.querySelectorAll('li'))
        {
            if (task.classList.contains('done'))
            {
                task.remove();
            }
        }
    });


    function newTask(input)
    {
        if (input.length > 5 && input.length < 100)
        {
            var header = document.createElement('h1');
            header.innerHTML = input;

            var del = document.createElement('button');
            del.innerHTML = 'Delete';
            del.addEventListener('click', function () { this.parentElement.remove(); });

            var complete = document.createElement('button');
            complete.innerHTML = 'Complete';
            complete.addEventListener('click', function ()
            {
                var classes = this.parentElement.classList;
                if (classes.contains('done'))
                {
                    classes.remove('done');
                }
                else
                {
                    classes.add('done');
                }
            });

            var task = document.createElement('li');
            task.appendChild(header);
            task.appendChild(del);
            task.appendChild(complete);

            return task;
        }
    }
});