document.addEventListener('DOMContentLoaded', function ()
{
        const parents = document.querySelectorAll('.parent');
        for (let parent of parents)
        {
            parent.addEventListener('mouseenter', function ()
            {
                parent.querySelector('.children').style.display = 'block';
            });
            /*parent.addEventListener('mouseleave', function ()
            {
                parent.querySelector('.children').style.display = 'none';
            });*/
        }

        function hideChildrenElement(element)
        {
            element.querySelector('.children').style.display = 'none';
        }

        for (let parent of parents)
        {
            parent.addEventListener('mouseleave', function ()
            {
                hideChildrenElement(this);
            });
        }
});