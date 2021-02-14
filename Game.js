class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  play(){

   form.hide(); 

   textSize(30);
   text("GameStart",120,100);

   Player.getPlayerInfo();

   //0,1,2,3
   if(allPlayers !== undefined){

      //the plr var will go through each of the player in the array AllPlayers
        for(var plr in allPlayers ){

          var display_pos = 130;

          if(plr === "player"+ player.index)
          fill("red");
          else
            fill("black");

          display_pos +=30;

          textSize(30);
          text(allPlayers[plr].name + ":" + allPlayers[plr].distance,120,display_pos);//Abhiram : 600
        }


   }

        if(keyIsDown(UP_ARROW) && player.index != null){
          player.distance += 30;
          player.update();

        }

  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
}
