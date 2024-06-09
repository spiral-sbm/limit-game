// Função de tela de game over.
function drawLose() {
  push();

  cursor("progress");

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
  stroke("yellow");
  drawButton(320, 320, 210, 30, "red");
  fill("yellow");
  text("Voltar ao menu", 250, 325);
  pop();

  push();
  stroke("white");
  fill("black");
  rect(320, 50, 450, 60);
  pop();
  pop();

  push();
  textFont(prpg);
  textSize(12);
  fill("white");
  text(
    "Dicas: O personagem e imortal, mas precisa defender sua casa ao lado direito. Cada fase e ultrapassada ao conseguir certa quantidade de Rublux. No total existem 4 fases, boa sorte...",
    325,
    40,
    450,
  );
  pop();

  image(knife, 525, 60, 35, 35);
  image(heart, 85, 5, 25, 25);
}

function onLoseClick() {
  if (TELA === LOSE) {
    buttonClick(320, 320, 180, 30, () => goingBack());
  }
}
