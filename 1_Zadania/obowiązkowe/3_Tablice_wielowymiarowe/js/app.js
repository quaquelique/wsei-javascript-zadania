// 3. Tablice wielowymiarowe

// Zadanie 0
{
    function checkArray(arrays)
    {
        outer:
        for (let i = 0; i < arrays.length; ++i)
        {
            for (let j = 0; j < arrays[i].length; ++j)
            {
                if (arrays[i][j] % 2 !== 0)
                {
                    arrays[i] = false;
                    continue outer;
                }
            }
            arrays[i] = true;
        }
        return arrays;
    }
    console.log(checkArray([[11, 12], [42, 4], [-4, -120], [0, 0], [1, 34]]).toString() + "\n");
}

// Zadanie 1
{
    const task1Array = [
        [2, 3],
        ["Ala", "Ola"],
        [true, false],
        [5, 6, 7, 8],
        [12, 15, 67]
    ];
    console.log(task1Array[3][2].toString());
    console.log(task1Array[1].length.toString());
    console.log(task1Array[4][2].toString());
    console.log();
}

// Zadanie 2
{
    const task2Array = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12]
    ];
    for (let i = 0; i < task2Array.length; ++i)
    {
        console.log(task2Array[i].toString());
    }
    for (let i = 0; i < task2Array.length; ++i)
    {
        console.log(task2Array[i].length.toString());
    }
    for (let i = 0; i < task2Array.length; ++i)
    {
        for (let j = 0; j < task2Array[i].length; ++j)
        {
            console.log(task2Array[i][j]);
        }
    }
    console.log();
}

// Zadanie 3
{
    function print2DArray(arrays)
    {
        for (let i = 0; i < arrays.length; ++i)
        {
            for (let j = 0; j < arrays[i].length; ++j)
            {
                console.log(arrays[i][j]);
            }
        }
    }
    print2DArray([[1, 2], [3, 4]]);
    console.log();
}

// Zadanie 4
{
    const myArrays = [["JavaScript", "C#", "Ada"], ["XML", "HTML"]];
    print2DArray(myArrays);
    console.log();
}

// Zadanie 5
{
    function create2DArray(rows, columns)
    {
        let arrays = new Array;
        let current = 1;

        for (let i = 0; i < rows; ++i)
        {
            arrays[i] = new Array();

            for (let j = 0; j < columns; ++j)
            {
                arrays[i][j] = current++;
            }
        }
        return arrays;
    }
    console.log(create2DArray(4, 4));
    console.log();
}