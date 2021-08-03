class Game{

    constructor(){

    }

    getState(){

        var gameStateRef= database.ref('gameState');
        gameStateRef.on("value",function(data){
        gameState=data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gameState:state
        })
    }

    async start(){
        if(gameState===0){
            player=new Player();
            var playerCountRef=await database.ref("playerCount").once("value");
            if(playerCountRef.exists()){
                playerCount=playerCountRef.val();
                player.getCount();
            }
            form= new Form();
            form.display();
        }

        car1=createSprite(100,200);
        car2=createSprite(300,200);
        car3=createSprite(500,200);
        car4=createSprite(700,200);
        carsArray=[car1,car2,car3,car4];
    }

    play(){
        form.Hide();
        textSize(20);
        text("Game Start",displayWidth/2+150,150);
        Player.getPlayersInfo();
        if(allPlayers!==undefined){
            
            var index=0;
            var x=0,y;
            for(var i in allPlayers){

                index=index+1;
                
                x=x+200;
                y=displayHeight-allPlayers[i].distance;

                carsArray[index-1].x=x;
                carsArray[index-1].y=y;

                if(index===player.index){
                    carsArray[index-1].shapeColor="red";
                    camera.position.x=displayWidth/2;
                    camera.position.y=carsArray[index-1].y;
                   
                }
               
            }
        }
        if(keyIsDown(UP_ARROW) && player.index!==null){
            player.distance+=50;
            player.update();

        }

        drawSprites();
    }
}