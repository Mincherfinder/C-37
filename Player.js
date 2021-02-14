class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;

  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance : this.distance
    });
  }

  //Player.getPlayerInfo
  static getPlayerInfo(){

    var getPlayerInforef =database.ref('players');
    getPlayerInforef.on("value", (data)=>{
      allPlayers = data.val();
    })


  }

}
