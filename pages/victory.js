// Função de tela de game over.
function drawWin() {
  cursor("progress"); // Cursor com bolinha de carregamento.

  // Logo do jogo, mostrando que você chegou ao limite.
  push();
  textFont(myFont);
  textAlign(CENTER);
  textSize(50);
  fill("white");
  text("Limit.", 320, 200);
  pop();

  // Botao de voltar ao menu principal
  push();
  textFont(prpg);
  textSize(18);
  fill(235);
  stroke("white");
  drawButton(200, 400, 210, 30, "black");
  fill("white");
  text("Voltar ao Limit.", 120, 407);
  pop();

  // Retângulo da caixa de texto.
  push();
  stroke("white");
  fill("black");
  rect(323, 450, 455, 60);
  pop();

  // Texto da caixa de texto.
  push();
  textFont(prpg);
  textSize(12);
  fill("white");
  let score = " Total de Rublux conseguidos: " + cash;
  text(
    "Congratulacoes. Voce chegou ao Limite, nao ha mais nada a ser feito, voce acabou com todos... voce chegou em um lugar que almeija inveja Acabou." +
      score,
    325,
    440,
    450,
  );
  pop();

  // Imagens da tela final.
  image(rublux, 535, 405, 25, 25);
  image(rock, 80, 460, 25, 25);
  character.display(); // Personagem sendo exibido...
  character.move(); // Dando aspecto de ter morrido.
}

// Função de cliques na tela de vitória.
function onWinClick() {
  if (TELA === VICTORY) {
    buttonClick(200, 400, 180, 30, () => (TELA = MENU));
    win = true;
  }
}
