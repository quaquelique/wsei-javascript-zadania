var namesA = new Array('Zosia', 'Marcin', 'Kamil');
var namesB = new Array('Ala', 'Puszek', ...namesA, 'Jan', 'Karol');

var getAverage = (...args) => args.reduce((x, y) => x + y) / args.length;

var name = 'Karol';
var array = new Array(...name);
console.log(array);

var fruits = new Array('pineapple', 'strawberry', 'pear');
var vegetables = new Array('potato', 'tomato', 'paprika');
var mix = new Array(...fruits, ...vegetables);