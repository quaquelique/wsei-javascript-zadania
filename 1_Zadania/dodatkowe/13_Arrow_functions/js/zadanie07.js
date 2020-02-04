const App = function ()
{
    this.websites = ['onet', 'wp', 'facebook'];
    this.links = [];
};


App.prototype.generateLinks = function ()
{
    for (var website of this.websites)
    {
        this.links.push(`https://${website}.pl`);
    }
};

jQuery(document).ready(() =>
{
    $('a').each(function(index)
    {
        $(this).attr('href', app.links[index]);
    });
});

let app = new App();
app.generateLinks();
console.log(app.links);
