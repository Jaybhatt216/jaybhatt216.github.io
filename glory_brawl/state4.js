brawl.state4=function(){};
brawl.state4.prototype= {
    preload: function (){
        game.load.image('background-four', 'assets/win.png');
    },
    create: function (){
        game.add.sprite(0,0, 'background-four');
        console.log("state4");
    },
    update: function (){}
};