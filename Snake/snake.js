function Snake(col, ai, xStart, yStart){
    this.total = 1;
    this.tail = [];
    this.x = xStart * scl;
    this.y = yStart * scl;
    this.xSpeed = 1;
    this.ySpeed = 0;
    this.color = col;
    this.ai = ai;
    this.lost = false;
    this.speed = 5;
    this.moveCounter = 0;

    this.update = function(){
        
        fill(0,255,0);
        r = rect(this.x, this.y, 10, 10);
        //Updating position
        if(this.ai === true){
            
            if(this.moveCounter < this.speed){
                this.moveCounter++;
            }else{
                if(this.tail.length == 0){
                    this.tail[0] = grid[0][0];
                    total = 1;
                }else if(this.tail.length < this.total){
                    this.tail.unshift(grid[this.x / scl][this.y / scl]);
                    this.tail[0].state = 1;
                    this.tail[0].color = this.color;
                }else{
                    this.tail.unshift(grid[this.x / scl][this.y / scl]);
                    this.tail[0].state = 1;
                    this.tail[0].color = this.color;
                    back = this.tail.pop();
                    if(!this.tail.includes(back))
                        back.state = 0;
                }
                this.moveCounter = 0;
                this.x += this.xSpeed*scl;
                this.y += this.ySpeed*scl;
                

                
                if(this.x > window_width-scl){
                    this.x = 0;
                }
                if(this.x < 0){
                    this.x = window_width - scl;
                }
                if(this.y > window_height-scl){
                    this.y = 0;
                }
                if(this.y < 0){
                    this.y = window_height - scl;
                }
                if(grid[this.x/scl][this.y/scl].state === 1 && grid[this.x/scl][this.y/scl].color != this.color){

                    this.lost = true;
                }
                this.getNextDir();
                grid[this.x/scl][this.y/scl].state = 1;
                grid[this.x/scl][this.y/scl].color = this.color;
            }
        }else{
            if(this.tail.length == 0){
                this.tail[0] = grid[0][0];
                total = 1;
            }else if(this.tail.length < this.total){
                this.tail.unshift(grid[this.x / scl][this.y / scl]);
                this.tail[0].state = 1;
                this.tail[0].color = this.color;
            }else{
                this.tail.unshift(grid[this.x / scl][this.y / scl]);
                this.tail[0].state = 1;
                this.tail[0].color = this.color;
                back = this.tail.pop();
                if(!this.tail.includes(back))
                        back.state = 0;
            }
            
            

            this.x += this.xSpeed*scl;
            this.y += this.ySpeed*scl;
            

            if(this.x > window_width-scl){
                this.x = 0;
            }
            if(this.x < 0){
                this.x = window_width - scl;
            }
            if(this.y > window_height-scl){
                this.y = 0;
            }
            if(this.y < 0){
                this.y = window_height - scl;
            }
            if(grid[this.x/scl][this.y/scl].state === 1 && grid[this.x/scl][this.y/scl].color != this.color){

                this.lost = true;
            }
            grid[this.x/scl][this.y/scl].state = 1;
            grid[this.x/scl][this.y/scl].color = this.color;
        }
        
        

        this.checkFoodCol();

        
    }
    this.show = function(){

        //grid[this.x][this.y].state = 1;
        //rect(this.x, this.y, scl, scl);
    }
    this.dir = function(x, y){
        if(this.xSpeed === -x && this.ySpeed === 0 && this.total > 1){
            return;
        }
        if(this.ySpeed === -y && this.xSpeed === 0 && this.total > 1){
            return;
        }
        this.xSpeed = x;
        this.ySpeed = y;
    }
    this.checkFoodCol = function(){
        
        if(this.x === food.x && this.y===food.y){
            this.total += 5;
            playerScore = document.getElementById("playerscore");
            playerScore.innerHTML = "Player: " + s1.total;
            cpuScore = document.getElementById("cpuscore");
            cpuScore.innerHTML = "CPU: " + s2.total;
            randIntLocation();
            
        }
    }
    this.getNextDir = function(){
         var options = grid[this.x/scl][this.y/scl].getNeighbors();
         var best = options[0];
         var bestDist = Infinity;
         for(var i = 0; i < options.length; i++){
            if(options[i].state === 2){
                best = options[i];
                break;
            }else if(options[i].state === 0){
                var optionsVec = createVector(options[i].x, options[i].y);
                var foodVec = createVector(food.x/scl, food.y/scl);
                if((distance(optionsVec, foodVec) < bestDist) || best.state === 1){
                    bestDist = distance(optionsVec, foodVec);
                    best = options[i];
                    
                }
            }
         }
         if(best.state === 1){
             for(var i = 0; i < options.length; i++){
                 if(options[i].state === 0){
                     best = options[i];
                 }
             }
         }
        
         
         var newDir = createVector();
         newDir.x = (best.x - this.x/scl) % cols;
         newDir.y = (best.y - this.y/scl) % rows;
         if(newDir.x > 1){
             newDir.x = 1;
         }
         if(newDir.y > 1){
             newDir.y = 1;
         }
         this.dir(newDir.x, newDir.y);
    }
    
}
function distance(l1, l2){
    x1 = l1.x;
    x2 = l2.x;
    y1 = l1.y;
    y2 = l2.y;


    difX = l2.x - l1.x;
    difY = l2.y - l1.y;

    squareSum = Math.pow(difX, 2) + Math.pow(difY, 2);

    return Math.pow(squareSum, .5);

}