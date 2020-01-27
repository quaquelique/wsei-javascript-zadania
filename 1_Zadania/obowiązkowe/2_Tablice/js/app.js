// Zadanie 0
function distFromAverage(inputs)
{
    let average = inputs.reduce((x, y) => x + y, 0) / inputs.length;

    for (let i = 0; i < inputs.length; ++i)
    {
        inputs[i] = Math.abs(inputs[i] - average);
    }
    return inputs;
}
console.log(distFromAverage([1, 2, 3, 4, 5]));
console.log();

// Zadanie 1
function favFruit()
{
    let fruits = ["strawberry", "pineapple", "pear", "cherry"];

    console.log(fruits[0]);
    console.log(fruits[fruits.length - 1]);

    for (let i = 0; i < fruits.length; ++i)
    {
        console.log(fruits[i]);
    }
}
favFruit();
console.log();

// Zadanie 2
function createArray(number)
{
    var newArray = new Array();

    for (var counter = 1; counter <= number; ++counter)
    {
        newArray.push(counter);
    }

    return newArray;
}
console.log("tablica z liczbami do 6 = " + createArray(6));
console.log("tablica z liczbami do 1 = " + createArray(1));
console.log("Test dla liczby ujemnej (powinna być pusta tablica) " + createArray(-6));
console.log("Test dla zera (powinna być pusta tablica) " + createArray(0));
console.log();

// Zadanie 3
function printTable(array)
{
    for (let i = 0; i < array.length; ++i)
    {
        console.log(array[i]);
    }
}
printTable([1, 2, 3]);
console.log();

// Zadanie 4
function multiply(array)
{
    let result = 1;

    for (let i = 0; i < array.length; ++i)
    {
        result *= array[i];
    }

    return result;
}
console.log(multiply([1, 2, 3, 4, 5, 6, 7]));
console.log(multiply([1, 1, 1, 1]));
console.log(multiply([2, 8, 3, 7]));
console.log();

// Zadanie 5
function getEvenAverage(array)
{
    let evens = new Array();

    for (let i = 0; i < array.length; ++i)
    {
        if (array[i] % 2 === 0) evens.push(array[i]);
    }

    if (evens.length === 0) return null;

    return evens.reduce((x, y) => x + y, 0) / evens.length;
}
console.log(getEvenAverage([1, 2, 3, 4, 5, 6, 7]));
console.log(getEvenAverage([1, 1, 1, 1]));
console.log(getEvenAverage([2, 8, 3, 7, 4]));
console.log();

// Zadanie 6
function sortArray(array)
{
    return array.sort((x, y) => x - y);
}
console.log(sortArray([145, 11, 3, 64, 4, 6, 10]).toString());
console.log();

// Zadanie 7
function addArrays(array, other)
{
    let result = new Array(array.length >= other.length ? array.length : other.length);

    for (let i = 0; i < result.length; ++i)
    {
        if (i >= array.length) result[i] = other[i];
        else if (i >= other.length) result[i] = array[i];
        else result[i] = array[i] + other[i];
    }

    return result;
}
console.log(addArrays([4, 0, 1, 3, 4], [1, 9, 6, 7, 8, 17]).toString());
console.log(addArrays([8, 3, 22], [1, 3, 2]).toString());
console.log(addArrays([2, 3, 1, 5, 3, 5], [3, 1, 76, 1]).toString());
console.log();

// done