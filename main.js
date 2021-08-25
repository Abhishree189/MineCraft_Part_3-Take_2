var canvas = new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;

block_img_width = 30;
block_img_height = 30;

var player_obj = "";
var block_img_obj = "";

function player_update(){
 
    fabric.Image.fromURL("player.png",function(Img){

        player_obj = Img;
        player_obj.scaleToWidth(150);
       player_obj.scaleToHeight(140);
       player_obj.set({

       top:player_y,
        left:player_x

       });

       canvas.add(player_obj);

    });
}

function new_image(get_image){
 
    fabric.Image.fromURL(get_image,function(Img){

        block_img_obj = Img;
        block_img_obj.scaleToWidth(block_img_width);
       block_img_obj.scaleToHeight(block_img_height);
       block_img_obj.set({

       top:player_y,
        left:player_x

       });

       canvas.add(block_img_obj);

    });
}

window.addEventListener("keydown" ,  my_keyDown);

function my_keyDown(e){

keypressed = e.keyCode;
console.log(keypressed);
if (e.shiftKey == true && keypressed == '80' ) {

block_img_width = block_img_width+10;
block_img_height = block_img_height+10;

document.getElementById("current_width").innerHTML = block_img_width;
document.getElementById("current_height").innerHTML = block_img_height;

}

if (e.shiftKey == true && keypressed == '77' ) {

    block_img_width = block_img_width-10;
    block_img_height = block_img_height-10;
    
    document.getElementById("current_width").innerHTML = block_img_width;
    document.getElementById("current_height").innerHTML = block_img_height;
    
    }

    if (keypressed == '37') {

     left();
     console.log("left");

    }

    if (keypressed == '38') {

        up();
        console.log("up");
   
       }

       if (keypressed == '39') {

        right();
        console.log("right");
   
       }

       if (keypressed == '40') {

        down();
        console.log("down");
   
       }

       if (keypressed == '87') {

        new_image('wall.jpg');
        console.log("w");

       }

       if (keypressed == '71') {

        new_image('ground.png');
        console.log("g");
        
       }

       if (keypressed == '76') {

        new_image('light_green.png');
        console.log("l");
        
       }

       if (keypressed == '84') {

        new_image('trunk.jpg');
        console.log("t");
        
       }
       
       if (keypressed == '82') {

        new_image('roof.jpg');
        console.log("r");
        
       }

       if (keypressed == '89') {

        new_image('yellow_wall.png');
        console.log("y");
        
       }

       if (keypressed == '68') {

        new_image('dark_green.png');
        console.log("d");
        
       }

       if (keypressed == '67') {

        new_image('cloud.jpg');
        console.log("c");
        
       }

       if (keypressed == '85') {

        new_image('unique.png');
        console.log("u");
        
       }

}

function up(){

if(player_y>=0){

player_y=player_y-block_img_height;
console.log("block_img_height="+block_img_height);

console.log("when up arrow is pressed,x="+player_x+"y="+player_y);

canvas.remove(player_obj);

player_update();

}

}

function down(){

    if(player_y<=500){
    
    player_y=player_y+block_img_height;
    console.log("block_img_height="+block_img_height);
    
    console.log("when down arrow is pressed,x="+player_x+"y="+player_y);
    
    canvas.remove(player_obj);
    
    player_update();
    
    }
    
    }

    function right(){

        if(player_x<=850){
        
        player_x=player_x+block_img_width;
        console.log("block_img_width="+block_img_width);
        
        console.log("when right arrow is pressed,x="+player_x+"y="+player_y);
        
        canvas.remove(player_obj);
        
        player_update();
        
        }
        
        }

        function left(){

            if(player_x>=0){
            
            player_x=player_x-block_img_width;
            console.log("block_img_width="+block_img_width);
            
            console.log("when arrow left is pressed,x="+player_x+"y="+player_y);
            
            canvas.remove(player_obj);
            
            player_update();
            
            }
            
            }
          