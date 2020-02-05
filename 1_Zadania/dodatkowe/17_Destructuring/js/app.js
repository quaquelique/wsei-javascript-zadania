document.addEventListener('DOMContentLoaded', () =>
{
    //#0a
    var weathers = new Array('snow', 'rain', 'sun');
    var [ snow, , sun ] = weathers;

    console.log(snow, sun);

    //#0b
    var slider =
        {
            type: 'infinite',
            numberOfItems: 10,
            center: true,
            autoStart: true
        };
    var { type, autoStart } = slider;

    console.log(type, autoStart);

    //#1
    var names = new Array('Stanisława', 'Wanda', 'Robert');
    var [ name1, name2, name3 ] = names;

    console.log(name1, name2, name3);

    //#2
    var generateRandomNumbers = () => Array.from(Array(6)).map(() => (Math.random() * 6).toFixed(2));
    var [ number1, number3 ] = generateRandomNumbers();

    console.log(number1, number3);

    //#4
    var getAnimal = () =>
    {
        return { name: 'Mruczek', age: 10, getVoice: () => 'miau miau' };
    };
    var { name, getVoice } = getAnimal();
    var catName = name;
    var catVoice = getVoice();

    console.log(catName, catVoice)
});