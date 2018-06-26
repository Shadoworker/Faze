 
	 var sceneW = document.getElementById('main')
                            .getBoundingClientRect()
                            .width;
     console.log(sceneW)
	 var sceneH = document.getElementById('main')
                             .getBoundingClientRect()
            		    .height;
	  
	 var game = new Phaser.Game(sceneW, sceneH, Phaser.CANVAS , 'main');
     console.log(game)

	 game.state.backgroundColor = '#ff0011';

	 
	   ////////////////Adding states////////////////
	   
	    game.state.add("mainstate", mainstate);

         /////////////////////////////////////////////
	   ///////////////Loading states////////////////
	   
	    game.state.start("mainstate");   

	   /////////////////////////////////////////////