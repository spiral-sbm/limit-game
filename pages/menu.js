function drawMenu() {
  BG = 5;
  background(menu);
  cursor("grab"); // Cursor com mãozinha.

  // Barra de botões
  push();
  fill("black");
  rect(320, 465, 640, 35);
  drawButton(100, 450, 150, 30, "black");
  drawButton(320, 450, 150, 30, "black");
  drawButton(540, 450, 150, 30, "black");
  pop();

  // Título do jogo.
  fill("white");
  push();
  stroke(0);
  strokeWeight(10);
  textFont(myFont);
  textSize(50);
  text("Limit.", 30, 120);
  pop();

  // Subtítulo do jogo.
  push();
  stroke(0);
  strokeWeight(5);
  textFont(prpg);
  textSize(20);
  textLeading(20);
  text("An empty bliss" + "\n" + "beyond this game.", 30, 145);
  pop();

  // Texto dos botões.
  push();
  textFont(prpg);
  textSize(20);
  fill("white");
  text("Jogar", 70, 455);
  text("Controles", 266, 455);
  text("Creditos", 495, 455);
  image(spiral, 510, 20, 100, 50); // Logo da Spiral.
  pop();
}

// Função de pressionar botões do menu.
function onMenuClick() {
  if (TELA === MENU) {
    throwing.play();
    buttonClick(100, 450, 150, 30, () => (TELA = GAME));
    buttonClick(320, 450, 150, 30, () => (TELA = CONTROLS));
    buttonClick(540, 450, 150, 30, () => (TELA = CREDITS));
  }
}
