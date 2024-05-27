function drawCredits() {
  background(BG);
  fill("white");
  rect(0, 0, 600, 440);
  stroke(0); // Fundo preto e tela branca, causando efeito de borda.

  image(sbm, -280, -200, 250, 250);
  fill("black");
  textSize(30);
  text("Felipe SBM", -260, 95);
  text(
    'Limit e um jogo TOWER DEFENCE. O seu criador se inspirou no album musical "Everywhere At The End Of Time" de The Caretaker.',
    150,
    50,
    320,
    450
  );
  textSize(20);
  text("felipe.sbm@icloud.com", -280, 120);
  drawButton(-155, 170, 250, 60, "black");
  fill("white");
  text("VOLTAR!", -210, 180);

  if (mouseX >= 40 && mouseX <= 290 && mouseY >= 380 && mouseY <= 440) {
    background(13);
    fill(RGB, 5, 5, 5);
    stroke("white");
    strokeWeight(3);
    rect(-155, 170, 250, 60);

    fill("white");
    text("VOLTAR? OQUE E ISSO?", -200, -170);
    image(img, -280, -115, 255, 255);
    text("??????", -190, 180);
  }
}

function onCreditsClick() {
  if (TELA === CREDITS) {
    buttonClick(165, 410, 250, 60, () => (TELA = MENU));
  }
}
