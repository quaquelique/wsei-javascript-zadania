$(document).ready(() =>
{
    $('div > ul').css('display', 'none');
    $('div').hover(function()
    {
        $(this).children('ul').css('display', 'block');
    }, function()
    {
        $(this).children('ul').css('display', 'none');
    });
});