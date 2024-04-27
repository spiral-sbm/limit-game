function drawMenu() {
  drawButton(0, 0, 150, 30, 'black');
  drawButton(0, 50, 150, 30, 'black');
  drawButton(0, 100, 150, 30, 'black');
  
  fill('black')
  textSize(20);
  textSize(50);
  text("Limit.", -90, -75);
  textSize(20);
  text("An empty bliss beyond this game.", -230, -50);

  fill('white');
  text("Jogar", -35, 5);
  text("Controles", -53, 55);
  text("Creditos", -48, 105);
  if (
    mouseX >= 245 &&
    mouseX <= 393 &&
    mouseY >= 275 &&
    mouseY <= 305 &&
    TELA !== CREDITS &&
    TELA !== CONTROLS &&
    TELA !== GAME
  ) {
    background(5);
    fill("white");
    rect(0, 50, 200, 30);
    textSize(50);
    text("Limit.", -90, -75);
    textSize(20);
    text("An empty bliss beyond this game.", -230, -50);
    fill("black");
    text("CONTROLES!?", -85, 55);
    
    // Quadrados 3D.

    noStroke();
    fill(75);
    push();
    translate(-75, -5, -75);
    rotateY(-3.14);
    rotateX(-15);
    box(150);
    pop();
    
    noStroke();
    fill(50);
    push();
    translate(-275, 175);
    rotateY(1.25);
    rotateX(-0.9);
    box(100);
    pop();
    
    noStroke();
    fill(25);
    push();
    translate(-75, 195);
    rotateY(2.75);
    rotateX(-2);
    box(50);
    pop();
  }
}

function onMenuClick() {
  if ( TELA === MENU) {
    buttonClick(320, 240, 150, 30, () => TELA = GAME);
    buttonClick(320, 290, 150, 30, () => TELA = CONTROLS);
    buttonClick(320, 340, 150, 30, () => TELA = CREDITS);
  }
}
