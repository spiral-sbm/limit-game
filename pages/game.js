function drawGame() {
  background(BG);
  fill("white");
  text("Em desenvolvimento..", -130, 0);
  drawButton(0, 140, 150, 30, BG);
  text("VolTar.", -38, 145);
}

function onGameClick() {
  if (TELA === GAME) {
    buttonClick(320, 380, 150, 30, () => (TELA = MENU));
  }
}
