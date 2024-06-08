// Função de tela de game over.
function drawWin() {
  push();

  push();
  textFont(myFont);
  textAlign(CENTER);
  textSize(50);
  fill("white");
  text("Limit.", 320, 200);
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
  text("Dicas: O personagem e imortal, mas precisa defender sua casa ao lado direito. Alguns inimigos podem ter diferentes pontos de dano, tome cuidado. Cada fase e concluida ao conseguir 15 rublux.", 325, 40, 450);
  pop();
  
  image(rublux, 525, 60, 25, 25)
  image(rock, 85, 5, 25, 25)
}

function onWinClick() {
  if (TELA === LOSE) {
    buttonClick(320, 320, 180, 30, () => (goingBack()));
  }
}
