 var myAudio = new Audio("tetris.mp3");
 myAudio.play();
 myAudio.addEventListener("ended", () => {
    this.currentTime = 0;
    this.play();
 });

 const playerElements = document.querySelectorAll(".player");
 
 const tetri = [];

 playerElements.forEach(element => {
  const tetris = new Tetris(element);
  tetri.push(tetris);
 })

 const keyListener = (e) => {
  
  [
    [65,68,81,69,83],
    /*[72,75,89,73,74]*/
    [37,39,38,70,40]
  ].forEach((key, index) => {

      const player = tetri[index].player;
      if(e.type === "keydown")
      {
        if(e.keyCode == key[0]){
          player.move(-1);
        }
        else if(e.keyCode == key[1]){
          player.move(1);
        }
        else if(e.keyCode == key[2]){
          player.rotate(-1);
        }
        else if(e.keyCode == key[3]){
          player.rotate(1);
        }
      }
     
      if(e.keyCode == key[4]){
        if(e.type ==="keydown")
        {
          if(player.dropInterval !== player.DROP_FAST)
          {
            player.drop();
            player.dropInterval = player.DROP_FAST;
          }
        }
        else{
          player.dropInterval = player.DROP_SLOW;
        }
      }
    });
 }

 document.addEventListener("keydown", keyListener);
 document.addEventListener("keyup", keyListener);
