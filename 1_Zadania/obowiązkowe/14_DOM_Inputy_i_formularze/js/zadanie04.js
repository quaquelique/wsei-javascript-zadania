document.addEventListener('DOMContentLoaded', () =>
{
    var visa =
        {
            full : /^4\d{12,15}$/,
            short : /^4/,
            name : 'Visa'
        };
    var masterCard =
        {
            full : /^5\d{15}$/,
            short : /^5/,
            name : 'Mastercard'
        };
    var americanExpress =
        {
            full : /^3[47]\d{13}$/,
            short : /^3[47]/,
            name : 'American Express'
        };

    document.querySelector('#name').addEventListener('input', function ()
    {
         var type = document.querySelector('#type');

         if (visa.short.test(this.value)) type.innerHTML = visa.name;
         else if (masterCard.short.test(this.value)) type.innerHTML = masterCard.name;
         else if (americanExpress.short.test(this.value)) type.innerHTML = americanExpress.name;
         else type.innerHTML = '';

         if (visa.full.test(this.value) || masterCard.full.test(this.value) || americanExpress.full.test(this.value))
             this.style.borderColor = 'green';
         else
             this.style.borderColor = 'red';
    });
});