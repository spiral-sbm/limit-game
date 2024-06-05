function drawControls() {
  background(BG - 5);
  let debugText = "X: " + mouseX + "\nY: " + mouseY;

  image(mouse, 0, 30, 200, 200);
  image(telefone, -90, 280, 300, 200);

  push();
    fill("white");
    textSize(35);
    textFont(myFont);
    text("Mouse", 250, 50);
    text("Telefone", 245, 300);
  pop();
  
  push();
    fill("white");
    textSize(25);
    textFont(prpg);
    text(
      "LMB para selecionar objetos na tela. Teste de mouse:" + "\n" + debugText,
      420,
      100,
      400
    );
    text("Apenas clicar na tela do jogo para selecionar, mover-se, disparar etc.", 420, 340, 400);
  pop();

  push();
    drawButton(540, 440, 150, 30, "white");
    fill("black");
    textFont(prpg);
    textSize(25)
    text("Voltar.", 495, 450);
  pop();
}

function onControlsClick() {
  if (TELA === CONTROLS) {  
    buttonClick(540, 440, 150, 30, () => (TELA = MENU));
  }
}
