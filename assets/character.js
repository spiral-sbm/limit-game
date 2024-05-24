let characterX;
let characterY;

function rotateCharacter() {
  characterX = width / 2;
  characterY = height / 2;
  
  let angle = atan2(mouseY - characterY, mouseX - characterX);
  translate(characterX, characterY);
  rotate(angle);
  imageMode(CENTER);
  image(ivan, 0, 0);
}
