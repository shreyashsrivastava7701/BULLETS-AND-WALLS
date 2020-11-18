var bullet, wall;
var speed, weight;
var thickness;

function setup() {
  createCanvas(1600,400);

  speed = random(223, 321);
  weight = random(30, 52);

  bullet = createSprite(50, 200, 70, 10);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

  thickness = random(22, 83);

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(0,0,0);  


  if (hasCollided(bullet, wall)) {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
  
    if (damage > 10) {
      bullet.shapeColor = color(255,0,0);
    }
  
    if (damage < 10) {
      bullet.shapeColor = color(0, 255, 0);
   }
  }

  drawSprites();
}

function hasCollided(bullet, object) {
    var bulletRightEdge=bullet.x + bullet.width;
    var objectLeftEdge = bullet.x + bullet.height;
    if (bulletRightEdge=objectLeftEdge) {
      return true;
    } else {
      return false;
    }
}