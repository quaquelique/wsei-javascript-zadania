document.addEventListener('DOMContentLoaded', () =>
{
    document.getElementById('box').onmousemove = function (x)
    {
        document.getElementById('globalX').innerHTML = x.pageX.toString();
        document.getElementById('globalY').innerHTML = x.pageY.toString();
        document.getElementById('localX').innerHTML = (x.pageX - this.offsetLeft).toString();
        document.getElementById('localY').innerHTML = (x.pageY - this.offsetTop).toString();
    }
});