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
  stroke("white");
  drawButton(200, 400, 210, 30, "black");
  fill("white");
  text("Voltar ao Limit.", 120, 407);
  pop();
  
  push();
  stroke("white");
  fill("black");
  rect(323, 450, 455, 60);
  pop();
  pop();
  
  push();
  textFont(prpg);
  textSize(12);
  fill("white");
  let score = " Total de Rublux conseguidos: " + cash;
  text("Congratulacoes. Voce chegou ao Limite, nao ha mais nada a ser feito, voce acabou com todos... voce chegou em um lugar que almeija inveja Acabou."+ score, 325, 440, 450);
  pop();
  
  
  character.display();
  character.move();
  image(rublux, 535, 405, 25, 25);
  image(rock, 80, 460, 25, 25);
}

function onWinClick() {
  if (TELA === LOSE) {
    buttonClick(200, 400, 180, 30, () => (TELA = MENU));
  }
}
