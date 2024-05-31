function drawCredits() {
  background(BG);
  fill("white");
  rect(320, 240, 600, 440);
  stroke(0); // Fundo preto e tela branca, causando efeito de borda.

  image(sbm, 40, 40, 250, 250);
  fill("black");
  textSize(30);
  text("Felipe SBM", 40, 325);
  textSize(20);
  text("felipe.sbm@icloud.com", 40, 350);
  drawButton(165, 410, 250, 60, "white");

  push();
  textFont(prpg);
  text("Diretor, programador, diretor musical, designer.", 460, 210, 300, 300);
  fill("black");
  text("VOLTAR!", 100, 420);
  pop();
}

function onCreditsClick() {
  if (TELA === CREDITS) {
    buttonClick(165, 410, 250, 60, () => (TELA = MENU));
  }
}
