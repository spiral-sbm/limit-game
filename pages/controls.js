function drawControls() {
  background(BG - 5);
  image(mouse, -320, -185, 200, 200);
  image(telefone, -400, 40, 300, 200);

  let debugText = "X: " + mouseX + "\nY: " + mouseY;
  fill("white");
  text(debugText, 0, 0);
  text("Mouse", -250, -200);
  text("Telefone", -282, 30);
}

function onControlsClick() {}
