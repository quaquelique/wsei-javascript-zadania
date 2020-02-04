/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */
document.addEventListener('DOMContentLoaded', () =>
{
    var elements = document.querySelectorAll('li');
    var body = document.querySelector('body');

    for (var image of document.querySelectorAll('img'))
    {
        image.addEventListener('click', function ()
        {
            var div = document.createElement('div');
            div.classList.add('fullScreen');

            var img = document.createElement('img');
            img.src = this.src;
            div.appendChild(img);

            var button = document.createElement('button');
            button.classList.add('close');
            button.innerHTML = 'Close';
            div.appendChild(button);
            button.addEventListener('click', () =>
            {
                body.removeChild(div);
            });

            body.appendChild(div);
        });
    }
});