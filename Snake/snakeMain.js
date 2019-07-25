var scl = 20;
var window_width = 600;
var window_height = 600;
var rows = window_height / scl;
var cols = window_width / scl;
var game_speed = 15;
var grid = new Array(cols);
var gotInput;
var displayingWinner = true;
var winnerText = "Press 1 to play vs. AI \n\nPress 2 to play local multiplayer";
var subText = "";
var paused = false;

function randIntLocation(){
    var cols2 = floor(width/scl);
    var rows2 = floor(height/scl);
    food.x = floor(random(cols2));
    food.y = floor(random(rows2));
    food.mult(scl);
}
function setup() {
    window.addEventListener("keydown", function(e) {//Prevent arrow keys scrolling the page
        // space and arrow keys
        if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
            e.preventDefault();
        }
    }, false);
    cnv = createCanvas(window_width,window_height);
    cnv.parent('mainContainer');

    
    grid = new Array(cols);
    for(var i = 0; i < rows; i++){
        grid[i] = new Array(rows);
    }
    for(var i = 0; i < cols; i++){
        for(var j = 0; j < rows; j++){
            grid[i][j] = new GridNode(i,j);
        }
    }
    for(var i = 0; i < cols; i++){
        for(var j = 0; j < rows; j++){
            grid[i][j].setNeighbors();
        }
    }
    s1 = new Snake(200, false, 0, 0);
    s2 = new Snake(1, true, cols-1, rows-1);

    activeButton = document.getElementsByClassName("active")[0];
    if(activeButton == null){
        document.getElementById("level1").click();
    }else{
        activeButton.click();
    }
    frameRate(game_speed);
    food = createVector();
    randIntLocation();
}

function draw() {
  
  if(!displayingWinner){
    if(s1.lost === true){
        if(s2.ai === true) 
            winnerText = "YOU LOSE!";
        else   
            winnerText = "Player 2 Wins!"
        subText = "Press 1 to play vs. AI \n\nPress 2 to play local multiplayer"
        displayingWinner=  true;
    }
    if(s2.lost === true){
        if(s2.ai === true) 
            winnerText = "YOU WIN!";
        else   
            winnerText = "Player 1 Wins!"
        subText = "Press 1 to play vs. AI \n\nPress 2 to play local multiplayer"
        displayingWinner = true;
    }
    
    grid[food.x / scl][food.y/scl].state = 2;
    for(var i = 0; i < cols; i++){
        for(var j = 0; j < rows; j++){
            grid[i][j].show();
        }
    }
    //rect(food.x, food.y, scl, scl);
    s1.update();
    s2.update();
    s1.show();
    s2.show();
    gotInput = false;
  }else{
    for(var i = 0; i < cols; i++){
        for(var j = 0; j < rows; j++){
            grid[i][j].show();
        }
    }
    fill(255);
    textSize(32);
    textAlign(CENTER);
    winnerTextElement = text(winnerText, window_width/2-100, window_height/2-100, 200, 200);
    textSize(20);
    subTextElement = text(subText, window_width/2-100, window_height/2, 200, 200);
  }
  gotInput = false;
  
}
function keyPressed(){
    

    if(displayingWinner === true){
        if(keyCode === 32 && paused === true){
            paused = false;
            displayingWinner = false;
        }else if(keyCode === 49){//1: Start AI Game
            grid = new Array(cols);
            for(var i = 0; i < rows; i++){
                grid[i] = new Array(rows);
            }
            for(var i = 0; i < cols; i++){
                for(var j = 0; j < rows; j++){
                    grid[i][j] = new GridNode(i,j);
                }
            }
            for(var i = 0; i < cols; i++){
                for(var j = 0; j < rows; j++){
                    grid[i][j].setNeighbors();
                }
            }
            s1 = new Snake(200, false, 0, 0);
            s2 = new Snake(1, true, cols-1, rows-1);
            activeButton = document.getElementsByClassName("active")[0];
            if(activeButton == null){
                document.getElementById("level1").click();
            }else{
                activeButton.click();
            }
            displayingWinner = false;
            playerScore = document.getElementById("playerscore");
            playerScore.innerHTML = "Player: " + s1.total;
            cpuScore = document.getElementById("cpuscore");
            cpuScore.innerHTML = "CPU: " + s2.total;
        }else if(keyCode === 50){//2: Start local multiplayer game
            grid = new Array(cols);
            for(var i = 0; i < rows; i++){
                grid[i] = new Array(rows);
            }
            for(var i = 0; i < cols; i++){
                for(var j = 0; j < rows; j++){
                    grid[i][j] = new GridNode(i,j);
                }
            }
            for(var i = 0; i < cols; i++){
                for(var j = 0; j < rows; j++){
                    grid[i][j].setNeighbors();
                }
            }
            s1 = new Snake(200, false, 0, 0);
            s2 = new Snake(1, false, cols-1, rows-1);
            displayingWinner = false;
            playerScore = document.getElementById("playerscore");
            playerScore.innerHTML = "Player: " + s1.total;
            cpuScore = document.getElementById("cpuscore");
            cpuScore.innerHTML = "CPU: " + s2.total;
        }
    }else{
        if(keyCode === UP_ARROW){
            gotInput = true;
            s1.dir(0, -1);
        }else if (keyCode === DOWN_ARROW){
            gotInput = true;
            s1.dir(0,1);
        }else if(keyCode === LEFT_ARROW){
            gotInput = true;
            s1.dir(-1, 0);
        }else if (keyCode === RIGHT_ARROW){
            gotInput = true;
            s1.dir(1,0);
        }else if (keyCode === 32){//Spacebar
            displayingWinner = true;
            paused = true;
            winnerText = "Paused";
            subText = "Press Space to continue"
            
        }
        if(s2.ai === false){
            if(keyCode === 87){//W
                gotInput = true;
                s2.dir(0, -1);
            }else if (keyCode === 83){//S
                gotInput = true;
                s2.dir(0,1);
            }else if(keyCode === 65){//A
                gotInput = true;
                s2.dir(-1, 0);
            }else if (keyCode === 68){//D
                gotInput = true;
                s2.dir(1,0);
            }
        }
    }
        
    
    
}
function changeDifficulty(level, id){
    for(var i = 1; i < 4; i++){
        var idString = "level" + i;
        document.getElementById(idString).className = document.getElementById(idString).className.replace(" active", "");
    }
    s2.speed = level;
    document.getElementById(id).className += " active";
}
