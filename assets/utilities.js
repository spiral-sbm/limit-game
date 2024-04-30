function buttonClick(X, Y, W, H, onClick) {
  if (
    mouseX >= X - W / 2 &&
    mouseX <= X + W / 2 &&
    mouseY >= Y - H / 2 &&
    mouseY <= Y + H / 2
  ) {
    onClick();
  }
}
function drawButton(X, Y, W, H, color) {
  push();
  fill(color);
  rect(X, Y, W, H, 50);
  pop();
}

function mouseHover(X, Y, W, H, onHover, outHover) {
  // O mouseHover não está funcionando, testei vários metodos, mas não adiantou.
  if (
    mouseX >= X - W / 2 &&
    mouseX <= X + W / 2 &&
    mouseY >= Y - H / 2 &&
    mouseY <= Y + H / 2
  ) {
    onHover();
  } else {
    outHover();
  }
}
