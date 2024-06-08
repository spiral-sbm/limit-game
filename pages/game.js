function drawGame() {
  background(fundo);

  // Cirador de tiros.
  for (let bullet of bullets) {
    push();
    fill(BG);
    circle(bullet.x, bullet.y, 10);
    bullet.x += bullet.velocidadeX; // Tiro em X
    bullet.y += bullet.velocidadeY; // Tiro em Y
    pop();
  }

  resetSketch();

  push();
  textFont(prpg);
  fill("white");
  textSize(20);
  textAlign(RIGHT);
  stroke(5);
  text(cash, 510, 44);
  text(life, 510, 74);
  image(frame, 555, 20, 65, 65);
  image(rock, 562, 27, 50, 50);
  image(heart, 510, 45, 45, 45);
  image(rublux, 516, 20, 30, 30);
  pop();
}

// Função de clique no jogo.
function onGameClick() {
  // Função de tela de lose.
  if (life === 0) {
    TELA = LOSE;
  }
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

// Função de resetar o jogo.
function resetSketch() {
  
    // Verificador de Rublux para passar fase.
  if (cash < 15){
    aceleration = 1.0;
  } if (cash >= 15 && cash < 30) {
    aceleration = 1.75;
  } if (cash > 30 && cash <= 50) {
    aceleration = 2.0;
  } if (cash > 50 && cash < 100) {
    aceleration = 2.75;
  } else if (cash >= 100) {
    TELA = VICTORY
  }
  
  // Verificador de finais.
  character.move();
  character.display();

  // Atualiza e imprime inimigos
  for (var enemy of enemies) {
    enemy.x += aceleration;
    image(inimigo, enemy.x, enemy.y, 57, 57);
    if (enemy.x > width) {
      life--;
      if (life === 0) {
        TELA = LOSE;
      }
    }
  }

  // Colisão e vida dos inimigos
  for (let enemy of enemies) { // Para cada inimigo.
    for (let bullet of bullets) { // Cada bala atingida
      if (dist(enemy.x, enemy.y, bullet.x, bullet.y) < 57) {
        enemies.splice(enemies.indexOf(enemy), 1);
        bullets.splice(bullets.indexOf(bullet), 1);
        for (let i = 0; i < 1; i++) {
          let enemy = {
            x: random(initial, 0),
            y: random(40, 400),
          };
          enemies.push(enemy);
          cash += 1;
        }
      }
    }
  }
}
