document.addEventListener('DOMContentLoaded', () =>
{
    // #0
    {
        var lengths = array => array.map(x => x.length);

        console.log('\n*** Task 0 ***\n');
        console.log(lengths(new Array('Kraków', 'Olsztyn', 'Szczecin', 'Ostrów Wielkopolski')));
    }
    // #1
    {
        var randomize = (param1, param2, callback) =>
        {
            var random = Math.random() * Math.abs(param1 - param2) + Math.min(param1, param2);
            if (typeof callback !== 'function') return;
            callback(random.toFixed(2));
        };

        console.log('\n*** Task 1 ***\n');
        randomize(10, 20, console.log)
    }
    // #2
    {
        var write = array => array.forEach(x => console.log(x));

        console.log('\n*** Task 2 ***\n');
        write(new Array('cat', 'shrimp', 'giraffe'));
    }
    // #3
    {
        var ages = array => array.map(x => new Date().getFullYear() - x);

        console.log('\n*** Task 3 ***\n');
        console.log(ages(new Array(1995, 1856, 2014, 1987)));
    }
    // #4
    {
        var aggregate = array => array.reduce((x, y) => x + y);
        var product = array => array.reduce((x, y) => x * y);

        console.log('\n*** Task 4 ***\n');
        console.log(aggregate(new Array(1, 2, 3, 4)));
        console.log(product(new Array(1, 2, 3, 4)));
    }
});