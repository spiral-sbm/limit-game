function drawCredits() {
  background(BG);

  push();
  fill("white");
  rect(320, 240, 600, 440);
  stroke(0); // Fundo preto e tela branca, causando efeito de borda.
  pop();

  fill("black");
  textSize(30);
  text("Diego Lucas", 40, 75);
  text("Juliano Oliv.", 40, 205);
  text("Felipe SBM", 40, 335);

  push();
  textFont(prpg);
  textSize(20);

  // Diego Lucas
  text("Roteirista, designer & suporte tecnico.", 460, 210, 300, 300);
  // Juliano Oliveira
  text("Programador, diretor musical & artista visual.", 460, 340, 300, 300);
  //  Felipe SBM
  text("Programador", 460, 470, 300, 300);
  drawButton(555, 430, 100, 35, "red");
  fill("yellow");
  text("Voltar", 520, 435);
  pop();
}

function onCreditsClick() {
  if (TELA === CREDITS) {
    buttonClick(555, 430, 100, 35, () => (TELA = MENU));
  }
}
