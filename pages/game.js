function drawGame() {
  BG = 117;
  background(fundo);

  
  push();
    textFont(prpg);
    fill('white');
    textSize(20);
    textAlign(RIGHT);
    stroke(5);
    text(cash, 510, 44);
  pop();

  // Cirador de tiros.
  for (let bullet of bullets) {
    push();
    fill(BG);
    circle(bullet.x, bullet.y, 10);
    bullet.x += bullet.velocidadeX; // Tiro em X
    bullet.y += bullet.velocidadeY; // Tiro em Y
    pop();
  }

  // Verificador de finais.
  character.move();
  character.display();

  // Atualiza e imprime inimigos
  for (let enemy of enemies) {
    enemy.x += 1.75;
    image(inimigo, enemy.x, enemy.y, random(56, 57), random(56, 57));
    if (enemy.x > width ) {
    gameOver();
    }
  }
  
  // Colisão e vida dos inimigos
  for (let enemy of enemies){
    for (let bullet of bullets){
      if (dist(enemy.x, enemy.y, bullet.x, bullet.y) < 10) {
  enemies.splice(enemies.indexOf(enemy), 1);
        bullets.splice(bullets.indexOf(bullet), 1);
          for (let i = 0; i < 1; i++) {
          let enemy = {
            x: random(-3000, 0),
            y: random(0, width - 57),
          };
          enemies.push(enemy);
          cash += 1;
        }
      }
    }
  }
   
  
  image(frame, 555, 20, 65, 65);
  image(rock, 562, 27, 50, 50);
  image(heart, 510, 45, 45, 45)
  image(rublux, 516, 20, 30, 30)
}

// Função de clique no jogo.
function onGameClick() {
  if (TELA === GAME) {
    let direcaoX = mouseX - character.x;
    let direcaoY = mouseY - character.y;
    let mag = sqrt(direcaoX * direcaoX + direcaoY * direcaoY);
    let velocidadeX = (direcaoX / mag) * 10; // Velocidade do tiro em X
    let velocidadeY = (direcaoY / mag) * 10; // Velocidade do tiro em Y

  // Gera uma munição a cada tiro.
    let bullet = {
      x: character.x,
      y: character.y,
      velocidadeX: velocidadeX,
      velocidadeY: velocidadeY,
    };
    bullets.push(bullet);
  }
}