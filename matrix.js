
var symbolSize = 35;
var streams = [];



function setup() {
    
    createCanvas(window.innerWidth, 
    window.innerHeight);
    background(0);
    
    
    var x=0;

    
    for (var i=0; i <= 2*width/symbolSize; i++){
        var stream = new Stream();
        stream.generateSymbols(x, random(-height, 0), round(random(15, 30)) );
        streams.push(stream);
        x += symbolSize/2;
        
    }
}
   

function draw() {
    
    background(0);
    streams.forEach(function(stream){
        textSize(stream.symbolSize);
        stream.render();
    });      
   }







function Symbol(x, y, speed) {
    
    this.x = x;
    this.y = y; 
    this.value;
    this.speed = speed;
    this.switchInterval = round(random(5, 30));
    this.position;
  
    
    //frameCount is built into p5.js
    this.setToRandomSymbol = function() {
        
        /*
        if (frameCount % this.switchInterval == 0) {
            this.value = String.fromCharCode(0x30A0 + round(random(-150, 256)) );
        } */  
        
        if (frameCount % this.switchInterval == 0) {
            this.value = String.fromCharCode(round(random(48, 49)) );
        }
    }
  
    
    this.rain = function() {
        this.y = (this.y >= height) ? 0 : this.y += this.speed; 
    }   
}
   




function Stream() {
    
    this.symbols = [];
    this.totalSymbols = round(random(12, 20));
    this.speed = round(random(15, 30));
    this.symbolSize;
    
    this.generateSymbols = function(x, y, symbolSize) {
        
        this.symbolSize = symbolSize;
        
        for (var i=0; i <= this.totalSymbols; i++) {
            symbol = new Symbol(x, y, this.speed);
            symbol.position = i;
            symbol.setToRandomSymbol();
            this.symbols.push(symbol);
            y -= symbolSize;
            
        }
    }
    
    this.render = function() {
        var r = 135;
        var g = 206;
        var b = 250;
        
        this.symbols.forEach(function(symbol) {
            
            if (symbol.position == 0) {
                fill(255, 255, 255, 200);
            }
            else if (symbol.position == 1) {
                fill(240, 255, 255, 150);
            }
            
            else if (symbol.position > 9)
            {                
                fill(r, g, b, 130 - symbol.position*3.5 );
            }
            else {
                fill(r, g, b, 130);
            }
            
            
            text(symbol.value, symbol.x, symbol.y); 
            symbol.rain();
            symbol.setToRandomSymbol();
            
        });
    }
}






    




    
