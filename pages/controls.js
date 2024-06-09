function drawControls() {
  background(BG - 5);
  let debugText = "X: " + mouseX + "\nY: " + mouseY; // Exemplo de mostrar posição do mouse.

  // Exibição das imagens de setas e mouse.
  image(mouse, 0, 30, 200, 200);
  image(arrows, 0, 250, 200, 200);

  // Exibição dos títulos.
  push();
  fill("white");
  textSize(35);
  textFont(myFont);
  text("Mouse", 250, 50);
  text("SeTas", 245, 300);
  pop();

  // Exibição don texto de controles do jogo.
  push();
  fill("white");
  textSize(25);
  textFont(prpg);
  text(
    "LMB para disparar pedras na tela. Teste de mouse:" + "\n" + debugText,
    420,
    100,
    400,
  );
  text(
    "Pressionar cada seta para o sentido desejado que o personagem deve seguir.",
    420,
    340,
    400,
  );
  pop();

  // Exibição do botão de voltar a tela inicial.
  push();
  drawButton(540, 440, 150, 30, "white");
  fill("black");
  textFont(prpg);
  textSize(25);
  text("Voltar.", 495, 450);
  pop();
}

// Função de clique na tela de controles.
function onControlsClick() {
  if (TELA === CONTROLS) {
    throwing.play();
    buttonClick(540, 440, 150, 30, () => (TELA = MENU));
  }
}
