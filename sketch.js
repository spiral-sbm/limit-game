//Criando o menu do jogo, parte 01

const MENU = "menu";
const GAME = "game";
const CONTROLS = "controls";
const CREDITS = "credits";

var TELA = MENU;

let sbm;
let mouse;
let telefone;
let menu;
let spiral;

let ivan;
let character;

let myFont;
let prpg
let BG = 500;

function preload() {
  myFont = loadFont("public/Rock3D-Regular.ttf");
  prpg = loadFont("public/Propaganda.ttf")
}

function setup() {
  createCanvas(640, 480);
  textFont(myFont);
  textFont(prpg);
  
  sbm = loadImage("public/samuel.webp");
  mouse = loadImage("public/mouse.webp");
  telefone = loadImage("public/telefone.webp");
  menu = loadImage('public/ivan-menu.webp')
  spiral = loadImage('public/spiral-games.png')
  
  character = new Character('public/ivan.webp', width / 2, height / 2);
}

function draw() {
  
  rectMode(CENTER);
  textFont(myFont);
  background(BG);

  if (TELA === MENU) {
    drawMenu();
  } if (TELA === GAME) {
    drawGame();
  } if (TELA === CONTROLS) {
    drawControls();
  } else if ( TELA === CREDITS) {
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
