//Criando o menu do jogo, parte 01

const MENU = "menu"; // Telas do jogo.
const GAME = "game";
const CONTROLS = "controls";
const CREDITS = "credits";

var TELA = MENU;
let img;

function setup() {
  createCanvas(640, 480);
  textFont("Courier New");
  img = loadImage(
    "https://th.bing.com/th/id/OIP.81TzTzIYDeR-e1WkIkS6gwHaHa?rs=1&pid=ImgDetMain"
  );
}

function draw() {
  // Posição dos elementos centralizada.

  rectMode(CENTER);

  // Posição do mouse na tela (debug).
  fill('white')
  let debugText = "X: " + mouseX + "\nY: " + mouseY;
  background(5);

  // Botões.

  fill("blue");
  rect(320, 220, 300, 30);

  fill("yellow");
  rect(320, 260, 300, 30);

  fill("black");
  text(debugText, 10, 20);

  fill("green");
  rect(320, 300, 300, 30);

  // Verificador de botões.

  if (mouseX >= 150 && mouseX <= 470 && mouseY >= 205 && mouseY <= 235) {
    fill('white');
    rect(320, 220, 300, 30);
  }
  if (mouseX >= 150 && mouseX <= 470 && mouseY >= 245 && mouseY <= 275) {
    fill('white');
    rect(320, 260, 300, 30);
  }
  if (mouseX >= 160 && mouseX <= 470 && mouseY >= 285 && mouseY <= 315) {
    fill('white');
    rect(320, 300, 300, 30);
  }

  // Verificador de telas.

  if (TELA === CONTROLS) {
    text("Essa é a tela de controles", 100, 100);
  }
  if (TELA === CREDITS) {
    text("Essa é a tela de créditos", 100, 100);
    fill("gray");
    rect(200, 200, 300, 250);
    image(img, 170, 135, 50, 50);
    text("Felipe SBM");
  }
}
function mouseClicked() {
  // Verificador de click em botões.

  if (mouseX >= 160 && mouseX <= 470 && mouseY >= 265 && mouseY <= 295) {
    console.log("Você clicou!");
    if (TELA === MENU) {
      TELA = CREDITS; // Verificador de telas.
    } else if (
      mouseX >= 150 &&
      mouseX <= 250 &&
      mouseY >= 225 &&
      mouseY <= 255
    ) {
      console.log("Essa é a tela de controles");
    }
  }
}
