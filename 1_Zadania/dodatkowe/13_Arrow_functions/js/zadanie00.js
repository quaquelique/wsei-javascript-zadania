var Students = function (array)
{
	this.array = array;
	this.numberOfLetters = new Array();
};
Students.prototype.countLetters = function ()
{
	this.numberOfLetters = this.array.map(x => x.length);
};

var students = new Students(new Array('Ania', 'Kamil', 'Mariusz'));
students.countLetters();
console.log(students.numberOfLetters);