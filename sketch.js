//Criando o menu do jogo, parte 01

const MENU = "menu"; // Telas do jogo.
const GAME = "game";
const CONTROLS = "controls";
const CREDITS = "credits";

var TELA = MENU;
let img;
let img2;
let sbm;
let myFont;

function preload() {
  myFont = loadFont("assets/Rock3D-Regular.ttf");
}

function setup() {
  createCanvas(640, 480, WEBGL);
  textFont(myFont);
  img = loadImage("assets/AEBBTW.webp");
  sbm = loadImage("assets/samuel.webp");
  img2 = loadImage("assets/AEBBTW2.webp");
}

function draw() {
  // Posição dos elementos centralizada.

  rectMode(CENTER);
  textFont(myFont);

  // Posição do mouse na tela (debug).
  fill("white");
  let debugText = "X: " + mouseX + "\nY: " + mouseY;
  background(500);

  // Botões.

  fill("black");
  rect(0, 0, 150, 30);
  rect(0, 50, 150, 30);
  rect(0, 100, 150, 30);

  textSize(20);
  text(debugText, -300, -200);
  textSize(50);
  text("Limit.", -90, -75);
  textSize(20);
  text("An empty bliss beyond this game.", -230, -50);

  fill("white");
  text("Jogar", -35, 5);
  text("Controles", -53, 55);
  text("Creditos", -48, 105);

  // Verificador de botões.

  if (
    mouseX >= 245 &&
    mouseX <= 393 &&
    mouseY >= 225 &&
    mouseY <= 255 &&
    TELA !== CREDITS &&
    TELA !== CONTROLS &&
    TELA !== GAME
  ) {
    background(5);
    fill("white");
    rect(0, 0, 200, 30);
    textSize(50);
    text("Limit.", -90, -75);
    textSize(20);
    text("An empty bliss beyond this game.", -230, -50);
    fill("black");
    text("JOGAR!?", -55, 5);

    noStroke();
    fill(25);
    push();
    translate(-275, 175);
    rotateY(1.25);
    rotateX(-0.9);
    box(200);
    pop();
    noFill();
    stroke(255);
    push();
    translate(500, height * 0.25, -200);
    sphere(350);
    pop();
  }
  if (
    mouseX >= 245 &&
    mouseX <= 393 &&
    mouseY >= 275 &&
    mouseY <= 305 &&
    TELA !== CREDITS &&
    TELA !== CONTROLS &&
    TELA !== GAME
  ) {
    background(5);
    fill("white");
    rect(0, 50, 200, 30);
    textSize(50);
    text("Limit.", -90, -75);
    textSize(20);
    text("An empty bliss beyond this game.", -230, -50);
    fill("black");
    text("CONTROLES!?", -85, 55);

    noStroke();
    fill(75);
    push();
    translate(-75, -5, -75);
    rotateY(-3.14);
    rotateX(-15);
    box(150);
    pop();
    
    noStroke();
    fill(50);
    push();
    translate(-275, 175);
    rotateY(1.25);
    rotateX(-0.9);
    box(100);
    pop();
    
    noStroke();
    fill(25);
    push();
    translate(-75, 195);
    rotateY(2.75);
    rotateX(-2);
    box(50);
    pop();
  }
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
    
    ambientLight(60, 60, 60);
    pointLight(255, 255, 255, mouseX, mouseY, 100);
    push();
    translate(-75, -50, -250);
    rotateZ(frameCount * 0.001);
    rotateX(frameCount * 0.001);
    rotateY(frameCount * 0.001);
    texture(img2);
    box(300);
    pop();
  }

  // Verificador de telas.
  if (TELA === GAME) {
    background(5);
    fill('white');
    text("Em desenvolvimento..", -120, 0);
  }
  if (TELA === CONTROLS) {
    background(5);
    text("Only Jesus is no controle, se vira.", -230, 0);
  }
  if (TELA === CREDITS) {
    background(5);
    fill("white");
    rect(0, 0, 600, 440);
    stroke(0); // Fundo preto e tela branca, causando efeito de borda.

    image(sbm, -280, -200, 250, 250);
    fill("black");
    textSize(30);
    text("Felipe SBM", -260, 95);
    text(
      'Limit e um jogo TOWER DEFENCE. O seu criador se inspirou no album musical "Everywhere At The End Of Time" de The Caretaker.',
      150,
      50,
      320,
      450
    );
    textSize(20);
    text("felipe.sbm@icloud.com", -280, 120);
    rect(-155, 170, 250, 60);
    fill('white');
    text("VOLTAR!", -210, 180); // Créditos do jogo e informações básicas.
    
    if (mouseX >= 40 && mouseX <= 290 && mouseY >= 380 && mouseY <= 440) {
      background(13);
      fill(RGB, 5, 5, 5);
      stroke("white");
      strokeWeight(3);
      rect(-155, 170, 250, 60);

      fill("white");
      text("VOLTAR? OQUE E ISSO?", -200, -170);
      image(img, -280, -115, 255, 255);
      text("??????", -190, 180);
    }
  }
}
function mouseClicked() {
  // Verificador de click em botões.
  if (
    mouseX >= 245 &&
    mouseX <= 393 &&
    mouseY >= 225 &&
    mouseY <= 255  
  ) {
    TELA = GAME;
  }
  if (
    mouseX >= 245 &&
    mouseX <= 393 &&
    mouseY >= 275 &&
    mouseY <= 305  
  ) {
    TELA = CONTROLS;
  }
  if (mouseX >= 170 && mouseX <= 470 && mouseY >= 325 && mouseY <= 355) {
    if (TELA === MENU) {
      TELA = CREDITS; // Verificador de telas.
    }
    if (mouseX >= 150 && mouseX <= 250 && mouseY >= 225 && mouseY <= 255) {
      console.log("Essa é a tela de controles");
    }
  }
  if (
    TELA === CREDITS &&
    mouseX >= 40 &&
    mouseX <= 290 &&
    mouseY >= 380 &&
    mouseY <= 440
  ) {
    TELA = MENU;
  }
}
