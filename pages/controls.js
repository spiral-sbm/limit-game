function drawControls() {
  background(BG - 5);
  image(mouse, -320, -185, 200, 200);
  image(telefone, -400, 40, 300, 200);

  let debugText = "X: " + mouseX + "\nY: " + mouseY;
  fill("white");
  text("Mouse", -250, -200);
  text(
    "LMB para selecionar objetos na tela. Teste de mouse:" + "\n" + debugText,
    70,
    -150,
    300
  );
  function drawControls() {
    background(BG - 5);
    image(mouse, -320, -185, 200, 200);
    image(telefone, -400, 40, 300, 200);

    let debugText = "X: " + mouseX + "\nY: " + mouseY;
    fill("white");
    text("Mouse", -250, -200);
    text(
      "LMB para selecionar objetos na tela. Teste de mouse:" + "\n" + debugText,
      70,
      -150,
      300
    );

    text("Telefone", -282, 30);
    text("Apenas clicar na tela para selecionar.", 70, 60, 300);

    drawButton(0, 140, 150, 30, "white");
    fill(BG);
    text("VolTar.", -38, 145);
  }

  function onControlsClick() {
    if (TELA === CONTROLS) {
      buttonClick(320, 380, 150, 30, () => (TELA = MENU));
    }
  }

  text("Telefone", -282, 30);
  text("Apenas clicar na tela para selecionar.", 70, 60, 300);

  drawButton(0, 140, 150, 30, "white");
  fill(BG);
  text("VolTar.", -38, 145);
}

function onControlsClick() {
  if (TELA === CONTROLS) {
    buttonClick(320, 380, 150, 30, () => (TELA = MENU));
  }
}
