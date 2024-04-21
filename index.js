//Criando o menu do jogo, parte 01

function setup() {
  createCanvas(400, 400);
}

function draw() {
  rectMode(CENTER);
  let debugText = "X: " + mouseX + "\nY: " + mouseY;
  background(500);

  fill('blue');
  rect(200, 200, 100, 30);

  fill('yellow')
  rect(200, 240, 100, 30);

  fill('black')
  text(debugText, 10, 20);

  if (mouseX >= 150 && mouseX <= 250 && mouseY >=185 && mouseY <= 215) {
    fill('yellow');
    rect (200, 200, 100, 30);
  } if （mousex >= 150 && mouseX <= 250 && mouseY >= 225 && mouseY <= 255） {
    fill('blue');
    rect (200, 240, 100, 30);
  } if (mouseX >= 160 && mouseX < 240 && mouseY >= 265 && mouseY <= 295)(
    fill(' blue');
    rect(200, 280, 80, 30);
  }

  fill('green');
  rect (200, 280, 80, 30);
}
function mouseClicked() {
console. log("hey, listen!");
}
