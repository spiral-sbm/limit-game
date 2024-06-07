// Função de tela de game over.
function drawLose() {
  push();

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
    "Dicas: O personagem e imortal, mas precisa defender sua casa ao lado direito. Alguns inimigos podem ser mais fortes que os outros, tome cuidado. Se conseguir mais de 50 rublux ganha o limit.",
    325,
    40,
    450,
  );
  pop();
}

function goingBack() {
  window.history.back();
  setTimeout(() => {
    window.location.reload();
  }, 100);
}

function onLoseClick() {
  if (TELA === LOSE) {
    buttonClick(320, 320, 180, 30, () => goingBack());
  }
}
