function setup() {
    
    createCanvas(640,480);
    
}

function draw() {
    noStroke();
    background('#FFFAED');
    
    var x = width/2;
    var y = height/2;
    
    fill('#995c1b');
    ellipse(x-150, y-150, 150, 150);
    ellipse(x+150, y-150, 150, 150);
    fill('#FFFFFF');
    ellipse(x-150, y-150, 100, 100);
    ellipse(x+150, y-150, 100, 100);
    fill('#995c1b');
    ellipse(x, y, 400, 400);
    fill('#000000');
    ellipse(x-50, y-50, 40, 40);
    ellipse(x+50, y-50, 40, 40);
    fill('#FFFFFF');
    ellipse(x, y+90, 220, 220);
    fill('#000000');
    ellipse(x, y + 40, 80, 80);
    noFill();
    stroke(0);
    
    //couldn't figure out these last parts
    //arc(x+40, y+120, 60, 60, HALF_PI, PI);
    //arc(x-40, y+120, 60, 60, HALF_PI, PI);
    
}