document.addEventListener('DOMContentLoaded', () =>
{
    document.getElementById('windowWidth').innerHTML = window.outerWidth.toString();
    document.getElementById('windowHeight').innerHTML = window.outerHeight.toString();

    window.onresize = function (x)
    {
        document.getElementById('windowWidth').innerHTML = x.target['outerWidth'];
        document.getElementById('windowHeight').innerHTML = x.target['outerHeight'];
    }
});