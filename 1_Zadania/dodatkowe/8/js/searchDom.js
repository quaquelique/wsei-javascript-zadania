// #1
{
    var getDataInfo = element =>
    {
        var array = new Array();
        for (var listElement of element.querySelectorAll('li'))
        {
            array.push(listElement.dataset.info);
        }
        return array;
    };

    var menu = document.querySelector('#menu');
    console.log('\n*** Task 1 ***\n');
    console.log(getDataInfo(menu));
}
// #2
{
    var getElementClass = element => element.classList.value.split(' ');

    var contener = document.querySelector('#main-contener');
    console.log('\n*** Task 2 ***\n');
    console.log(getElementClass(contener));
}
// #3
{
    var getElementText = element => element.innerHTML;

    var pink = document.querySelector('.pink-color');
    console.log('\n*** Task 3 ***\n');
    console.log(getElementText(pink));
}
// #4
{
    var getElementAlt = element =>
    {
        var array = new Array();
        for (var img of element)
        {
            array.push(img.getAttribute('alt'));
        }
        return array;
    };

    var images = document.querySelectorAll('.images');
    console.log('\n*** Task 4 ***\n');
    console.log(getElementAlt(images));
}
// #5
{
    var getElementHref = element =>
    {
        var array = new Array();
        for (var a of element)
        {
            array.push(a.getAttribute('href'));
        }
        return array;
    };

    var links = document.querySelectorAll('.my-link');
    console.log('\n*** Task 5 ***\n');
    console.log(getElementHref(links));
}