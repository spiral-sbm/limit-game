let characterX = 640 / 2;
let characterY = 480 / 2;

function rotateCharacter() {
  push();
  translate(characterX, characterY)
  let angle = atan2(mouseY - characterY, mouseX - characterX);
  rotate(angle);
  pop();
}

function moveCharacter() {
  if (keyIsDown(LEFT_ARROW) === true) {
    characterX -= 2;
  }

  if (keyIsDown(RIGHT_ARROW) === true) {
    characterX += 2;
  }

  if (keyIsDown(UP_ARROW) === true) {
     characterY -= 2;
  }

  if (keyIsDown(DOWN_ARROW) === true) {
    characterY += 2;
  }
  image(ivan, characterX, characterY, 50, 50);
}