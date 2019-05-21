function GridNode(xPos, yPos){
    this.x = xPos;
    this.y = yPos;
    this.neighbors = [];
    this.color = 0;
    //0: empty
    //1: snake
    //2: food
    this.state = 0;

    

    this.getX = function(){
        return x;
    }
    this.getY = function(){
        return y;
    }
    this.getState = function(){
        return this.state;
    }
    this.setNeighbors = function(){
        
        this.neighbors = [];
        var upY = (this.y - 1);
        
        var downY = (this.y + 1);
        
        var leftX = (this.x - 1);
        
        var rightX = (this.x + 1);
        

        
        if(upY >= 0)
            this.neighbors.push(grid[this.x][upY]);
        if(downY < rows)
            this.neighbors.push(grid[this.x][downY]);
        if(leftX >= 0)
            this.neighbors.push(grid[leftX][this.y]);
        if(rightX < cols)
            this.neighbors.push(grid[rightX][this.y]);
        
    }
    this.getNeighbors = function(){
        return this.neighbors;
    }

    this.show = function(){
        if(this.state === 0){
            fill(51);
            
        }else if(this.state === 1){
            fill(this.color);
        }else if(this.state === 2){
            fill(255,0,0);
        }else{
            fill(51);
        }
        rect(this.x * scl, this.y * scl, scl, scl);
    }
    

}
