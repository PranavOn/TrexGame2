var trex, trex_running;
var ground, ground_image;
var cactus;
var invisibleGround;

function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  ground_image = loadImage("ground2.png");
}

function setup() {
  createCanvas(600, 200);

  //create a trex sprite
  trex = createSprite(50, 170, 20, 90);

  invisibleGround = createSprite(200, 190, 400, 20);

  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  // ground sprite () -> so we need to move it backwards.
  ground = createSprite(200, 180, 400, 20);
  ground.addImage(ground_image);
  ground.x = ground.width / 2;
  invisibleGround.visible = false;
  // Ground velocities
  ground.velocityX = -3;
}

function draw() {
  background("black");
  drawSprites();

  // Keyboard Input
  if (keyDown("space") && trex.y > 100) {
    trex.velocityY = -10;
  }

  // Trex Movement
  trex.velocityY += 0.5;

  /**
   * If the ground goes out of the screen,
   * this function will reset it to the
   * screen.
   */
  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  trex.collide(invisibleGround);

  console.log(ground.x);
}
