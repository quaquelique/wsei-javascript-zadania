document.addEventListener('DOMContentLoaded', () =>
{
    var invoiceData = document.querySelector('#invoiceData');
    invoiceData.style.display = 'none';

    document.querySelector('#invoice').addEventListener('click', function ()
    {
        if (this.checked)
        {
            invoiceData.style.display = 'block';
        }
        else
        {
            invoiceData.style.display = 'none';
        }
    });
});