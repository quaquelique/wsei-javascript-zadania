function countHello(range)
{
    let interval = setInterval(write, 1000);

    let count = 1;

    function write()
    {
        if (count >= range) clearInterval(interval);

        console.log("Hello " + count++);
    }
}

countHello(10);

// done