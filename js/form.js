class Form{

    constructor(){

        this.input=createInput("Enter Your Name!");
        this.button= createButton("Click ME!");
        this.greeting=createElement("h2");


    }

    Hide(){

        this.input.hide();
        this.button.hide();
        this.greeting.hide();

    }

    display(){

        var title= createElement('h1');
        title.html("Car Racing Game");
        title.position(displayWidth/2+150,100);

        this.input.position(displayWidth/2+150,displayHeight/2-80);
        this. button.position(displayWidth/2+150, displayHeight/2);

        this.button.mousePressed(()=>{

            this.input.hide();
            this. button.hide();

            player.name=this.input.value();

            playerCount+=1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello"+" "+player.name);
            this.greeting.position(displayWidth/2+150,displayHeight/4);
        });
    }
}