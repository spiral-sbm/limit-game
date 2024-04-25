//Criando o menu do jogo, parte 01

const MENU = "menu"; // Telas do jogo.
const GAME = "game";
const CONTROLS = "controls";
const CREDITS = "credits";

var TELA = MENU;
let img;
let myFont;

function preload() {
  myFont = loadFont('assets/Rock3D-Regular.ttf'); 
}

function setup() {
  createCanvas(640, 480, WEBGL);
  textFont(myFont);
  img = loadImage('assets/samuel.webp');
}

function draw() {
  // Posição dos elementos centralizada.

  rectMode(CENTER);
  textFont(myFont); 

  // Posição do mouse na tela (debug).
  fill('white')
  let debugText = "X: " + mouseX + "\nY: " + mouseY;
  background(500);

  // Botões.

  fill('black');
  rect(0, 0, 300, 30);
  rect(0, 50, 300, 30);
  rect(0, 100, 300, 30);
  
  textSize(20);
  text(debugText, -300, -200);
  textSize(50);
  text('Limit.', -90, -75);
  textSize(20);
  text('An empty bliss beyond this game.', -230, -50)
  
  fill('white');
  text('Jogar', -35, 5);
  text('Controles', -50, 55);
  text('Creditos', -45, 105);

  // Verificador de botões.

  if (mouseX >= 170 && mouseX <= 470 && mouseY >= 225 && mouseY <= 255) {
    background(5);
    fill('white');
    rect(0, 0, 300, 30);
    textSize(50);
    text('Limit.', -90, -75);
    textSize(20);
    text('An empty bliss beyond this game.', -230, -50)
    fill('black');
    text('JOGAR!?', -55, 5);
  }
  if (mouseX >= 170 && mouseX <= 470 && mouseY >= 275 && mouseY <= 305) {
    background(5);
    fill('white');
    rect(0, 50, 300, 30);
    textSize(50);
    text('Limit.', -90, -75);
    textSize(20);
    text('An empty bliss beyond this game.', -230, -50)
    fill('black');
    text('CONTROLES!?', -75, 55);
  }
  if (mouseX >= 170 && mouseX <= 470 && mouseY >= 325 && mouseY <= 355) {
    background(5);
    fill('white');
    rect(0, 100, 300, 30);
    textSize(50);
    text('Limit.', -90, -75);
    textSize(20);
    text('An empty bliss beyond this game.', -230, -50)
    fill('black');
    text('CREDITOS!?', -65, 105);
  }

  // Verificador de telas.

  if (TELA === CONTROLS) {
    background(5);
    text("Essa é a tela de controles", 100, 100);
  }
  if (TELA === CREDITS) {
    background(5);
    fill('white');
    rect(0, 0, 433, 320);
    image(img, 0, 0, 50, 50);
    fill('black');
    text('Felipe SBM', 0, 0);
    text('Heyyyyy teste numero 1.', 0, 0);
  }
}
function mouseClicked() {
  // Verificador de click em botões.

  if (mouseX >= 170 && mouseX <= 470 && mouseY >= 325 && mouseY <= 355) {
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
