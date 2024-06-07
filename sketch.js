//Criando o menu do jogo, parte 10

const MENU = "menu";
const GAME = "game";
const CONTROLS = "controls";
const CREDITS = "credits";
const LOSE = "lose";

var TELA = MENU;

// Imagens do menu, controles e créditos, respectivamente.
let menu;
let spiral;
let fundo;
let mouse;
let arrows;

// Imagens do jogo.
let character;
let frame;
let rock;
let knife;
let heart;
let rublux;

// Variáveis responsáveis pelo funcionamento do jogo
let inimigo;
let life = 1;
let cash = 0;
let bullets = []; // Fessô, são armas de brinquedo, não me cancele!
let enemies = [];
let aceleration = 1.75;
let initial = -3000;
let verify = false;

// Variáveis responsáveis por fontes e cor.
let myFont;
let prpg;
let BG = 500;

function preload() {
  myFont = loadFont("public/Rock3D-Regular.ttf");
  prpg = loadFont("public/Propaganda.ttf");
}

function setup() {
  createCanvas(640, 480); // Qualidade do jogo.
  textFont(myFont); // Fonte do Limit.
  textFont(prpg); // Fonte geral.
  angleMode(DEGREES);

  retry = createButton("retry");
  retry.hide();

  // Imagens do menu, controles e créditos.
  mouse = loadImage("public/mouse.webp");
  arrows = loadImage("public/arrows.webp");
  menu = loadImage("public/ivan-menu.webp");
  spiral = loadImage("public/spiral-games.webp");
  fundo = loadImage("public/background.webp");

  character = new Character("public/ivan.webp", width / 2, height / 2);
  frame = loadImage("public/frame.webp");
  rock = loadImage("public/rock.webp");
  knife = loadImage("public/knife.webp");
  heart = loadImage("public/heart.webp");
  rublux = loadImage("public/rublux.webp");
  inimigo = loadImage("public/enemy.webp");

  for (let i = 0; i < 10; i++) {
    let enemy = {
      x: random(-640, 0),
      y: random(40, 400),
    };
    enemies.push(enemy);
  }
}

// Impressão das telas do jogo.
function draw() {
  rectMode(CENTER);
  textFont(myFont);
  background(BG);

  if (TELA === MENU) {
    drawMenu();
  }
  if (TELA === GAME) {
    BG = 5;
    drawGame();
  }
  if (TELA === CONTROLS) {
    BG = 10;
    drawControls();
  }
  if (TELA === CREDITS) {
    BG = 15;
    drawCredits();
  } else if (TELA === LOSE) {
    BG = 0;
    drawLose();
  }
}

// Verificador de click do botão esquerdo do mouse.
function mouseClicked() {
  onMenuClick();
  onGameClick();
  onLoseClick();
  onControlsClick();
  onCreditsClick();
}
