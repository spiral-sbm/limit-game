function drawGame() {
  BG = 117;
  background(fundo);

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
    enemy.x += 0.75;
    image(inimigo, enemy.x, enemy.y, random(56, 57), random(56, 57));
  }

  // Colisão e vida dos inimigos
  for (let enemy of enemies) {
    for (let bullet of bullets) {
      if (dist(enemy.x, enemy.y, bullet.x, bullet.y) < 10) {
        enemies.splice(enemies.indexOf(enemy), 1);
        bullets.splice(bullets.indexOf(bullet), 1);
        for (let i = 0; i < 10; i++) {
          let enemy = {
            x: random(-3000, 0),
            y: random(0, width - 57),
          };
          enemies.push(enemy);
        }
      }
    }
  }
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
