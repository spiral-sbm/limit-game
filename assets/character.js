class Character {
  constructor(imgPath, x, y) {
    this.img = loadImage(imgPath);
    this.x = x;
    this.y = y;
    this.speed = 2; // Velocidade de movimento
  }

  // Detector de movimento do personagem.
  move() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.speed;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.speed;
    }
    if (keyIsDown(UP_ARROW)) {
      this.y -= this.speed;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.y += this.speed;
    }
  }

  // Personagem na tela
  display() {
    let angle = atan2(mouseY - this.y, mouseX - this.x);
    push();
    translate(this.x, this.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.img, 0, 0, 45, 45);
    pop();
  }
}
