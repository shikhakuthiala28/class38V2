var canvas,backgroundImage;
var gameState=0;
var playerCount;
var distance=0;
var database;
var form,player,game;
var allPlayers;
var car1,car2,car3,car4,carsArray;

function setup(){

    canvas= createCanvas(displayWidth-20,displayHeight-30);
    database= firebase.database();

    game= new Game();
    game.getState();
    game.start();
}

function draw(){
    if(playerCount===2){
        game.update(1);
    }
    if(gameState===1){
        clear();
        game.play();
    }

}
