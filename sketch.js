//Criando o menu do jogo, parte 01

const MENU = 'menu'; // Telas do jogo.
const GAME = 'game';
const CONTROLS = 'controls';
const CREDITS = 'credits';

var TELA = MENU;
let img;

function setup() {
  createCanvas(400, 400);
  img = loadImage('samuel.webp');
}

function draw() {
  
  // Posição dos elementos centralizada.
  
  rectMode(CENTER);
  
  // Posição do mouse na tela (debug).
  
  let debugText = "X: " + mouseX + "\nY: " + mouseY;
  background(500);
  
  // Botões.

  fill('blue');
  rect(200, 200, 100, 30);

  fill('yellow')
  rect(200, 240, 100, 30);

  fill('black')
  text(debugText, 10, 20);

  fill('green');
  rect (200, 280, 80, 30);
  
    // Verificador de botões.

    if (mouseX >= 150 && mouseX <= 250 && mouseY >= 185 && mouseY <= 215) {
      fill('yellow');
      rect (200, 200, 100, 30);
  } if (mouseX >= 150 && mouseX <= 250 && mouseY >= 225 && mouseY <= 255) {
      fill('blue');
      rect (200, 240, 100, 30);
  } if (mouseX >= 160 && mouseX <= 240 && mouseY >= 265 && mouseY <= 295) {
      fill('blue');
      rect(200, 280, 80, 30);
  }
  
  // Verificador de telas.
  
  if (TELA === MENU) {
    text("Essa é a tela de menu", 100, 100);
    
  }   if (TELA === CREDITS) {
    text("Essa é a tela de créditos", 100, 100);
      fill('green');
      rect (200, 200, 300, 250);
  }
}
function mouseClicked() {
  
  // Verificador de click em botões.
  
  if (mouseX >= 160 && mouseX <= 240 && mouseY >= 265 && mouseY <= 295) {
    console.log("Você clicou!")
    if (TELA === MENU) {
      TELA = CREDITS;   // Verificador de teals.
    }
  }
}
