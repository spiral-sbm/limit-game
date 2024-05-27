function draw() {
  background(40);
  for (var i = 0; i < num; i++) {
    const bx1 = r[i];
    r[i].show();
    for (var j = 0; j < num; j++) {
      if (j !== i) {
        const bx2 = r[j];
        const t1 = bx1.top + bx1.ya;
        const b1 = bx1.bottom + bx1.ya;
        const l1 = bx1.left + bx1.xa;
        const r1 = bx1.right + bx1.xa;
        const t2 = bx2.top + bx2.ya;
        const b2 = bx2.bottom + bx2.ya;
        const l2 = bx2.left + bx2.xa;
        const r2 = bx2.right + bx2.xa;
        if (!(t1 > b2 || b1 < t2 || l1 > r2 || r1 < l2)) {
          if (r1 >= l2) {
            bx1.xa = -Math.abs(bx1.xa);
            bx2.xa = Math.abs(bx2.xa);
          }
          if (l1 <= r2) {
            bx1.xa = Math.abs(bx1.xa);
            bx2.xa = -Math.abs(bx2.xa);
          }

          if (b1 >= t2) {
            bx1.ya = -Math.abs(bx1.ya);
            bx2.ya = Math.abs(bx2.ya);
          }
          if (t1 <= b2) {
            bx1.ya = Math.abs(bx1.ya);
            bx2.ya = -Math.abs(bx2.ya);
          }
        }
      }
    }
  }
}
