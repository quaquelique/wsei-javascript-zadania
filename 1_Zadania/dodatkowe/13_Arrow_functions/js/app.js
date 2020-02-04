// #1
{
    var helloWorld = () => console.log('Hello, world!');

    console.log('\n*** Task 1 ***');
    helloWorld();
}
// #2
{
    var multiply = (number = 0) => number * 2;

    console.log('\n*** Task 2 ***');
    console.log(multiply());
    console.log(multiply(2));
}
// #3
{
    var greater = (value, other) => Math.max(value, other);

    console.log('\n*** Task 3 ***');
    console.log(greater(1, 0));
}
// #4
{
    var getSecondMaxNumber = array =>
    {
        array.splice(array.indexOf(Math.max.apply(Math, array)), 1);
        return Math.max.apply(Math, array);
    };

    console.log('\n*** Task 4 ***');
    console.log(getSecondMaxNumber(new Array(2, 3, 1, 6, 100, 49, 5, 7, 8, 9)));
}
// #5
{
    console.log('\n*** Task 5 ***');
    ((text) => text)('Hello, IIFE :)');
    ((text) => console.log(text))('Hello, IIFE :)');
}
// #6
{
    var countHello = range =>
    {
        var write = () =>
        {
            if (count >= range) clearInterval(interval);
            console.log('Hello ' + count++);
        };
        var interval = setInterval(write, 1000);
        var count = 1;
    };

    console.log('\n*** Task 6 ***');
    countHello(3);
}