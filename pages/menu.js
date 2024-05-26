function drawMenu() {
  BG = 5;
  background(BG * 100);
  drawButton(320, 230, 150, 30, "black");
  drawButton(320, 300, 150, 30, "black");
  drawButton(320, 370, 150, 30, "black");

  fill("black");
  push();
  textSize(50);
  text("Limit.", 240, 120);
  pop();
  textSize(20);
  text("An empty bliss beyond this game.", 110, 140);

  fill("white");
  text("Jogar", 290, 235);
  text("Controles", 320, 300);
  text("Creditos", 320, 370);

  if (
    mouseX >= 245 &&
    mouseX <= 393 &&
    mouseY >= 225 &&
    mouseY <= 255 &&
    TELA !== CREDITS &&
    TELA !== CONTROLS &&
    TELA !== GAME
  ) {
    background(BG);
    fill("white");
    rect(320, 0, 200, 30);
    textSize(50);
    text("Limit.", -90, -75);
    textSize(20);
    text("An empty bliss beyond this game.", -230, -50);
    fill("black");
    text("JOGAR!?", -55, 5);
  }
  if (
    mouseX >= 245 &&
    mouseX <= 393 &&
    mouseY >= 275 &&
    mouseY <= 305 &&
    TELA !== CREDITS &&
    TELA !== CONTROLS &&
    TELA !== GAME
  ) {
    background(BG);
    fill("white");
    rect(0, 50, 200, 30);
    textSize(50);
    text("Limit.", -90, -75);
    textSize(20);
    text("An empty bliss beyond this game.", -230, -50);
    fill("black");
    text("CONTROLES!?", -85, 55);
  }
  if (
    mouseX >= 245 &&
    mouseX <= 393 &&
    mouseY >= 325 &&
    mouseY <= 355 &&
    TELA !== CREDITS &&
    TELA !== CONTROLS &&
    TELA !== GAME
  ) {
    background(BG);
    fill("white");
    rect(0, 100, 200, 30);
    textSize(50);
    text("Limit.", -90, -75);
    textSize(20);
    text("An empty bliss beyond this game.", -230, -50);
    fill("black");
    text("CREDITOS!?", -75, 105);
  }
}

function onMenuClick() {
  if (TELA === MENU) {
    buttonClick(320, 240, 150, 30, () => (TELA = GAME));
    buttonClick(320, 290, 150, 30, () => (TELA = CONTROLS));
    buttonClick(320, 340, 150, 30, () => (TELA = CREDITS));
  }
}
