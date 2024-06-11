// Bem-vindo ao Limit, An Empty Bliss Beyond This Game.
// Este jogo não foi utilizado Inteligências Artificiais!!! #odeioIA.
// Artes feitas pelo pintor e desenhista potiguar Pedro Emanuel.
// Jogo indie, artista pequeno e sem muita experiência.
// E a mecânica de inimigos extraída de um criador de conteúdo de poucos assinantes.

// Telas do jogo.
const MENU = "menu";
const GAME = "game";
const CONTROLS = "controls";
const CREDITS = "credits";
const LOSE = "lose";
const VICTORY = "victory";

var TELA = MENU; // Tela que iniciará.

// Imagens do menu, controles e créditos, respectivamente.
let menu;
let spiral;
let fundo;
let mouse;
let arrows;
let sbm;
let die;
let jul;
let mrw;
let pdr;

// Imagens do jogo.
let character;
let frame;
let rock;
let knife;
let heart;
let rublux;

// Sons do jogo.
let limit;
let victory;
let died;
let throwing;

// Variáveis responsáveis pelo funcionamento do jogo
let inimigo;
let life = 3;
let cash = 0;
let bullets = []; // Fessô, são armas de brinquedo, não me cancele!
let enemies = [];
let aceleration = 1.0;
let initial = -1000;
let win = false;
let verify;

// Variáveis responsáveis por fontes e cor.
let myFont;
let prpg;
let BG = 500;

function preload() {
  // Fontes usadas no jogo.
  myFont = loadFont("public/Rock3D-Regular.ttf");
  prpg = loadFont("public/Propaganda.ttf");

  // Sons do jogo
  limit = loadSound("public/limit.mp3", carregado);
  victory = loadSound("public/win.mp3");
  died = loadSound("public/die.mp3");
  throwing = loadSound("public/shoot.mp3");
}

function setup() {
  createCanvas(640, 480); // Qualidade do jogo.
  textFont(myFont); // Fonte do Limit.
  textFont(prpg); // Fonte geral.
  angleMode(DEGREES); // Girar ângulo em graus.

  retry = createButton("retry");
  retry.hide();

  // Imagens do menu, controles e créditos.
  mouse = loadImage("public/mouse.webp");
  arrows = loadImage("public/arrows.webp");
  menu = loadImage("public/ivan-menu.webp");
  spiral = loadImage("public/spiral-games.webp");
  fundo = loadImage("public/background.webp");
  sbm = loadImage("public/sbm.webp");
  die = loadImage("public/die.webp");
  jul = loadImage("public/julians.webp");
  mrw = loadImage("public/mrw.webp");
  pdr = loadImage("public/pdr.webp");

  character = new Character("public/ivan.webp", width / 2, height / 2);
  frame = loadImage("public/frame.webp");
  rock = loadImage("public/rock.webp");
  knife = loadImage("public/knife.webp");
  heart = loadImage("public/heart.webp");
  rublux = loadImage("public/rublux.webp");
  inimigo = loadImage("public/enemy.webp");

  // Carregar inimigos.
  for (let i = 0; i < 15; i++) {
    let enemy = {
      x: random(-640, 0),
      y: random(40, 400),
    };
    enemies.push(enemy);
  }
}

// Função para carregar música em loop
function carregado() {
  limit.loop(); // Música feita por mim.
  if (TELA === VICTORY) {
    victory.play(); // Efeito sonoro de crianças do jogo FNAF. Editado por mim.
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
    BG = 255;
    drawCredits();
  }
  if (TELA === LOSE) {
    BG = 0;
    drawLose();
  } else if (TELA === VICTORY) {
    BG = 0;
    drawWin();
  }
}

// Verificador de click do botão esquerdo do mouse.
function mouseClicked() {
  onMenuClick();
  onGameClick();
  onLoseClick();
  onWinClick();
  onControlsClick();
  onCreditsClick();
}
