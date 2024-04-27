//Criando o menu do jogo, parte 01

const MENU = "menu";
const GAME = "game";
const CONTROLS = "controls";
const CREDITS = "credits";

var TELA = MENU;
let img;
let img2;
let sbm;
let myFont;
let BG = 5;

function preload() {
  myFont = loadFont("public/Rock3D-Regular.ttf");
}

function setup() {
  createCanvas(640, 480, WEBGL);
  textFont(myFont);
  img = loadImage("public/AEBBTW.webp");
  sbm = loadImage("public/samuel.webp");
  img2 = loadImage("public/AEBBTW2.webp");
}

function draw() {
  // Posição dos elementos centralizada.

  rectMode(CENTER);
  textFont(myFont);

  // Posição do mouse na tela (debug).
  fill("white");
  background(500);

  if (TELA === MENU) {
    drawMenu();
  } if (TELA === GAME) {
    drawGame();
  } if (TELA === CONTROLS) {
    drawControls();
  } else if ( TELA === CREDITS) {
    drawCredits();
  }

  // Verificador de botões.
  if (
    mouseX >= 245 &&
    mouseX <= 393 &&
    mouseY >= 325 &&
    mouseY <= 355 &&
    TELA !== CREDITS &&
    TELA !== CONTROLS &&
    TELA !== GAME
  ) {
    background(5);
    fill("white");
    rect(0, 100, 200, 30);
    textSize(50);
    text("Limit.", -90, -75);
    textSize(20);
    text("An empty bliss beyond this game.", -230, -50);
    fill("black");
    text("CREDITOS!?", -75, 105);
    
    // A pedra com fósforo (An Empty Bliss Beyond This World).
    
    push();
    translate(-75, -50, -250);
    rotateZ(frameCount * 0.0005);
    rotateX(frameCount * 0.0005);
    rotateY(frameCount * 0.0005);
    texture(img2);
    box(300);
    pop();
  }
}

function mouseClicked() {
  // Verificador de click em botões.
  onMenuClick();
  onGameClick();
  onControlsClick();
  onCreditsClick();
}
