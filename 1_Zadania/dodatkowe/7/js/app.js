document.addEventListener('DOMContentLoaded', () =>
{
    // #1
    {
        var getNumber = (number, array) => array.includes(number);

        console.log('\n*** Task 1 ***\n');
        console.log(`getNumber(2, [33, 54, 2, 1, 4, 100]) => ${getNumber(2, [33, 54, 2, 1, 4, 100])}`);
        console.log(`getNumber(5, [33, 54, 2, 1, 4, 100]) => ${getNumber(5, [33, 54, 2, 1, 4, 100])}`);
    }
    // #2
    {
        var createIdentityMatrix = (rows, columns) =>
        {
            var matrix = new Array();
            for (var i = 0; i < rows; ++i)
            {
                var column = new Array();
                for (var j = 0; j < columns; ++j)
                {
                    column.push(i === j ? 1 : 0);
                }
                matrix.push(column);
            }
            return matrix;
        };

        console.log('\n*** Task 2 ***\n');
        console.log(`createIdentityMatrix(4,4) => ${createIdentityMatrix(4, 4)}`);
    }
    // #3
    {
        var sortPlanet = planets => planets.sort((x, y) => y.numberOfMoons - x.numberOfMoons);

        console.log('\n*** Task 3 ***\n');
        planets.forEach(x => console.log(x));
    }
    // *1
    {
        var addTheSameNumbers = (number, array) =>
        {
            if (!array.includes(number)) return null;
            return array.reduce((x, y) => y !== number ? x : x + y, 0);
        };

        console.log('\n*** Optional Task 1 ***\n');
        console.log('addTheSameNumbers(7, [4, 7, 24, 7, 0, 10]) => ' +
            addTheSameNumbers(7, [4, 7, 24, 7, 0, 10]));
        console.log('addTheSameNumbers(9, [33, 54, 2, 1, 9, 100]) => ' +
            addTheSameNumbers(9, [33, 54, 2, 1, 9, 100]));
        console.log('addTheSameNumbers(0, [33, 0, 2, 0, 9, 0]) => ' +
            addTheSameNumbers(0, [33, 0, 2, 0, 9, 0]));
        console.log('addTheSameNumbers(43, [6, 0, 2, 2, 3, 46]) => ' +
            addTheSameNumbers(43, [6, 0, 2, 2, 3, 46]));
    }
    // *2
    {
        var factors = number =>
        {
            if (number <= 0) return new Array();
            var array = new Array();
            for (var i = number; i > 0; --i)
            {
                if (number % i !== 0) continue;
                array.push(i);
            }
            return array;
        };

        console.log('\n*** Optional Task 2 ***\n');
        console.log(`factors(2) => ${factors(2)}`);
        console.log(`factors(54) => ${factors(54)}`);
        console.log(`factors(-4) => ${factors(-4)}`);
    }
    // *3
    {
        var getMissingElement = array =>
        {
            for (var i = 1; i < array.length; ++i)
            {
                if (array[i] - array[i - 1] !== 1) return ++array[i - 1];
            }
            return null;
        };

        console.log('\n*** Optional Task 3 ***\n');
        console.log('getMissingElement([1, 2, 3, 4, 5, 6, 7]) => ' +
            getMissingElement([1, 2, 3, 4, 5, 6, 7]));
        console.log('getMissingElement([6, 7, 8, 10, 11, 12, 13, 14, 15]) => ' +
            getMissingElement([6, 7, 8, 10, 11, 12, 13, 14, 15]));
        console.log('getMissingElement([-4, -3, -2, 0, 1, 2, 3, 4]) => ' +
            getMissingElement([-4, -3, -2, 0, 1, 2, 3, 4]));
    }
    // *4
    {
        var getLastNumbers = (number, array) =>
        {
            if (!Number.isInteger(number)) return new Array();
            var index = array.length - number;
            return array.filter(x => array.indexOf(x) >= index);
        };

        console.log('\n*** Optional Task 4 ***\n');
        console.log('getLastNumbers(2, [1, 2, 3, 4, 5, 6, 7]) => ' +
            getLastNumbers(2, [1, 2, 3, 4, 5, 6, 7]));
        console.log('getLastNumbers(4, [6, 7, 8, 10, 11, 12, 13, 14, 15]) => ' +
            getLastNumbers(4, [6, 7, 8, 10, 11, 12, 13, 14, 15]));
        console.log('getLastNumbers([-4, -3, -2, 0, 1, 2, 3, 4]) => ' +
            getLastNumbers([-4, -3, -2, 0, 1, 2, 3, 4]));
        console.log('getLastNumbers("ala", [-4, -3, -2, 0, 1, 2, 3, 4]) => ' +
            getLastNumbers('ala', [-4, -3, -2, 0, 1, 2, 3, 4]));
    }
});