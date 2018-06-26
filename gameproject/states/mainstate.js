//This is the autogenerated main.js file for your Game

window.mainstate = function(game) {};



mainstate.prototype = {

    preload: function() {

        this.load.image('player', '../assets/objicon.png');
        this.load.image('player2', '../assets/objicon.png');
        this.load.image('player3', '../assets/objicon.png');


    },

    create: function() {
        var player = this.add.sprite(60, 120, 'player');
        // var player2 = this.add.sprite(120, 180, 'player2');
        // var player3 = this.add.sprite(320, 280, 'player3');
        // player3.scale.setTo(0.5,0.5);
        player.inputEnabled = true;
        //  Allow dragging - the 'true' parameter will make the sprite snap to the center
        player.input.enableDrag();
        player.input.useHandCursor = true;
        // player.events.onInputDown.add(listener, this);
 
 
        this.rect0 = this.add.graphics(this.world.centerX, this.world.centerY);
        this.rect0.beginFill(0xFF0000, 1);
        this.rect0.drawRect(0, 0, 150, 100);
        this.rect0.inputEnabled = true;
        this.rect0.input.enableDrag();
        this.rect0.input.useHandCursor = true;

        console.log(this)
       

    },
    update: function() {

    },

    render: function() {
        // kEEP EMPTY IF NO RENDER PROCESS
    }


    // function listener(sprite, pointer) {
    //   // body...
    //   console.log(sprite)
    //   riot.store.trigger('objectselected', sprite);
    // }

} //End of prototype