//Criando o menu do jogo, parte 01

const MENU = "menu";
const GAME = "game";
const CONTROLS = "controls";
const CREDITS = "credits";

var TELA = MENU;

let img;
let img2;
let sbm;
let mouse;
let telefone;

let myFont;
let BG = 500;

function preload() {
  myFont = loadFont("public/Rock3D-Regular.ttf");
}

function setup() {
  createCanvas(640, 480, WEBGL);
  textFont(myFont);

  img = loadImage("public/AEBBTW.webp");
  img2 = loadImage("public/AEBBTW2.webp");
  sbm = loadImage("public/samuel.webp");
  mouse = loadImage("public/mouse.webp");
  telefone = loadImage("public/telefone.webp");
}

function draw() {
  rectMode(CENTER);
  textFont(myFont);
  background(BG);

  if (TELA === MENU) {
    drawMenu();
  }
  if (TELA === GAME) {
    drawGame();
  }
  if (TELA === CONTROLS) {
    drawControls();
  } else if (TELA === CREDITS) {
    drawCredits();
  }
}

function mouseClicked() {
  // Verificador de click em botões.
  onMenuClick();
  onGameClick();
  onControlsClick();
  onCreditsClick();
}
