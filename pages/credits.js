function drawCredits() {
  background(BG);

  push();
  fill("black");
  rect(320, 240, 600, 440);
  stroke(1); // Fundo preto e tela branca, causando efeito de borda.
  pop();

  push();
  fill("white");
  textSize(30);
  textAlign(RIGHT);
  text("Diego Lucas", 300, 70);
  text("Juliano Oliv.", 300, 120);
  text("Felipe SBM", 300, 170);
  text("Pedro Mon.", 300, 220); // https://www.youtube.com/@pedroemanuel5395
  text("Mr. Ward", 300, 270); // https://www.youtube.com/@codingwithmrward1648
  pop();

  push();
  fill("white");
  textSize(30);
  textFont(prpg);
  textSize(20);
  textAlign(LEFT);
  // Diego Lucas
  text("Roteiro", 320, 70);
  // Juliano Oliveira
  text("SFX & VFX.", 320, 120);
  //  Felipe SBM
  text("Desenvolvimento", 320, 170);
  // Pedro Monteiro
  text("Artes Visuais", 320, 220);
  // Mr. Ward
  text("Mecanica de inimigos", 320, 270);
  drawButton(555, 430, 100, 35, "red");
  fill("yellow");
  text("Voltar", 520, 435);
  pop();

  image(die, 40, 390, 50, 60);
  image(jul, 100, 360, 70, 90);
  image(sbm, 155, 365, 65, 85);
  image(pdr, 230, 375, 60, 75);
  image(mrw, 300, 390, 60, 60);
}

function onCreditsClick() {
  if (TELA === CREDITS) {
    buttonClick(555, 430, 100, 35, () => (TELA = MENU));
  }
}
