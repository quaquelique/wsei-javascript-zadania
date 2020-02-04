/*
 <span class="tooltipText">Text tooltipa</span>
 */
document.addEventListener('DOMContentLoaded', () =>
{
    var tooltips = document.querySelectorAll('.tooltip');
    for (var tooltip of tooltips)
    {
        tooltip.addEventListener('mouseover', function ()
        {
            var text = document.createElement('span');
            text.classList.add('tooltipText');
            text.innerHTML = this.dataset.text;
            this.appendChild(text);
        });
        tooltip.addEventListener('mouseout', function ()
        {
            var text = this.querySelector('.tooltipText');
            if (text !== null) this.removeChild(text);
        });
    }
});
