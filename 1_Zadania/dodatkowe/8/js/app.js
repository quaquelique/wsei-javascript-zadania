{
    var Tree = function (type)
    {
        this.type = type;
    };

    var oak = new Tree('Oak');
    var spruce = new Tree('Spruce');
    var birch = new Tree('Birch');

    Tree.prototype.bloom = () => 'I am blooming';

    console.log(oak.type, oak.bloom(), spruce.type, spruce.bloom(), birch.type, birch.bloom());
}