document.addEventListener('DOMContentLoaded', () =>
{
    document.querySelector('form').addEventListener('submit', event =>
    {
        event.preventDefault();
        console.log(`Do zapłaty: ${document.querySelector('#price').innerHTML}`);
    });

    var inputs = Array.from(document.querySelectorAll('input'));
    var all = inputs.shift();
    var none = inputs.pop();
    var checkboxes = new Array();
    inputs.forEach(x => checkboxes.push(new Checkbox(x)));

    inputs.forEach(x =>
    {
        x.addEventListener('change', () => checkboxes[inputs.indexOf(x)].toggle());
    });
    all.addEventListener('change', () => checkboxes.forEach(x =>
    {
        if (!x.checked)
        {
            x.box.checked = !x.box.checked;
            x.toggle();
        }
    }));
    none.addEventListener('change', () => checkboxes.forEach(x =>
    {
        if (x.checked)
        {
            x.box.checked = !x.box.checked;
            x.toggle();
        }
    }));
});

var Checkbox = function (box)
{
    this.box = box;
    this.price = this.box.dataset.price;
    this.checked = false;
    this.toggle = function()
    {
        var total = document.querySelector('#price');
        var value = total.innerHTML.replace('zł', '');
        value = Number.parseFloat(value) + (this.box.checked ? +this.price : -this.price);
        total.innerHTML = value.toFixed(2).toString() + 'zł';
        this.checked = !this.checked;
    };
};