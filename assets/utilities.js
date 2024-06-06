//Função de clique do mouse.
function buttonClick(X, Y, W, H, onClick) {
  if (
    mouseX >= X - W / 2 &&
    mouseX <= X + W / 2 &&
    mouseY >= Y - H / 2 &&
    mouseY <= Y + H / 2
  ) {
    onClick();
  }
}
function drawButton(X, Y, W, H, color) {
  push();
  fill(color);
  rect(X, Y, W, H);
  pop();
}

// Função de verificar se o mouse está em cima.
function mouseHover(X, Y, W, H, onHover, outHover) {
  // O mouseHover não está funcionando, testei vários metodos, mas não adiantou.
  if (
    mouseX >= X - W / 2 &&
    mouseX <= X + W / 2 &&
    mouseY >= Y - H / 2 &&
    mouseY <= Y + H / 2
  ) {
    onHover();
  } else {
    outHover();
  }
}

// Função de tecla pressionada.
function keyPressed() {
  if (keyCode === UP_ARROW) {
    value = 0;
  }
  if (keyCode === DOWN_ARROW) {
    value = 260;
  }
  if (keyCode === LEFT_ARROW) {
    value = 255;
  } else if (keyCode === RIGHT_ARROW) {
    value = 0;
  }
}

// Função de vetorização do mouse.
function getMouseVector() {
  let mouseAltX = mouseX - ivanPosX;
  let mouseAltY = mouseY - ivanPosY;
  let mouseDir = createVector(mouseAltX, mouseAltY);
  mouseDir.normalize();
  return mouseDir;
}

// Função de desenhar o retículo.
function drawReticle() {
  noFill();
  strokeWeight(1.5);
  stroke(0, 100, 125, 125);
  ellipse(mouseX, mouseY, 20);
  stroke(80, 160, 200, 125);
  line(mouseX - 14, mouseY - 14, mouseX + 14, mouseY + 14);
  line(mouseX + 14, mouseY - 14, mouseX - 14, mouseY + 14);
  stroke(80, 160, 200, 125);
  line(ivanPosX, ivanPosY, mouseX, mouseY);
}

// Função de tela de game over.
function gameOver() {
  push();
  noStroke();
  fill(BG);
  rect(320, 240, 420, 220);

  push();
  textFont(myFont);
  textAlign(CENTER);
  textSize(50);
  fill("white");
  text("Faleceu...", 320, 200);
  pop();

  push();
  textFont(prpg);
  textSize(18);
  fill(235);
  let score = "Pontos totais: " + cash;
  text(score, 240, 250);
  drawButton(320, 320, 180, 30, "red");
  fill("yellow");
  text("reiniciar", 270, 325);
  pop();
  retry = true;

  pop();
  noLoop();
}

// Função de resetar o jogo.
function reset() {
  cash = 0;
  retryValidate = true;
  loop();
}
