function drawMenu() {
  BG = 5;
  background(menu);

  push();
  fill("black");
  rect(320, 465, 640, 35);
  pop();

  drawButton(100, 450, 150, 30, "black");
  drawButton(320, 450, 150, 30, "black");
  drawButton(540, 450, 150, 30, "black");

  fill("white");
  push();
  stroke(0);
  strokeWeight(10);
  textFont(myFont);
  textSize(50);
  text("Limit.", 30, 120);
  pop();

  push();
  stroke(0);
  strokeWeight(5);
  textFont(prpg);
  textSize(20);
  textLeading(20);
  text("An empty bliss" + "\n" + "beyond this game.", 30, 145);
  pop();

  push();
  textFont(prpg);
  textSize(20);
  fill("white");
  text("Jogar", 70, 455);
  text("Controles", 266, 455);
  text("Creditos", 495, 455);
  image(spiral, 510, 20, 100, 50);
  pop();
}
function onMenuClick() {
  if (TELA === MENU) {
    buttonClick(100, 450, 150, 30, () => (TELA = GAME));
    buttonClick(320, 450, 150, 30, () => (TELA = CONTROLS));
    buttonClick(540, 450, 150, 30, () => (TELA = CREDITS));
  }
}
