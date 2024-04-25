//Criando o menu do jogo, parte 01

const MENU = "menu"; // Telas do jogo.
const GAME = "game";
const CONTROLS = "controls";
const CREDITS = "credits";

var TELA = MENU;
let img;
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
    mouseX <= 395 &&
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
    fill(50);
    push();
    translate(-275, 175);
    rotateY(1.25);
    rotateX(-0.9);
    box(100);
    pop();
    noFill();
    stroke(255);
    push();
    translate(500, height * 0.35, -200);
    sphere(300);
    pop();
  }
  if (
    mouseX >= 245 &&
    mouseX <= 395 &&
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
    fill(50);
    push();
    translate(-275, 175);
    rotateY(1.25);
    rotateX(-0.9);
    box(100);
    pop();
  }
  if (
    mouseX >= 245 &&
    mouseX <= 395 &&
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

    noFill();
    stroke(255);
    push();
    translate(500, height * 0.35, -200);
    sphere(300);
    pop();
  }

  // Verificador de telas.

  if (TELA === CONTROLS) {
    background(5);
    text("Essa é a tela de controles", 100, 100);
  }
  if (TELA === CREDITS) {
    background(5);
    fill("white");
    rect(0, 0, 600, 440);
    stroke(0);

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
    textSize(25);
    text("Programador", -260, 120);
    rect(-155, 170, 250, 60);
    fill('white');
    text("VOLTAR!", -225, 180);
    if (mouseX >= 40 && mouseX <= 290 && mouseY >= 380 && mouseY <= 440) {
      background(13);
      fill(RGB, 5, 5, 5);
      stroke("white");
      strokeWeight(3);
      rect(-155, 170, 250, 60);

      fill("white");
      text("VOLTAR? OQUE E ISSO?", -200, -170);
      image(img, -280, -115, 255, 255);
      text("??????", -205, 180);
    }
  }
}
function mouseClicked() {
  // Verificador de click em botões.

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
