var canvas = document.getElementsByClassName('fluid-canvas')[0]; // Canvas

window.resizeCanvas();
window.updateKeywords();
window.initFramebuffers();
window.multipleSplats(parseInt(Math.random() * 20, 10) + 5);


canvas.addEventListener('mousedown', (e) => {
  let posX = scaleByPixelRatio(e.offsetX);
  let posY = scaleByPixelRatio(e.offsetY);
  let pointer = pointers.find((p) => p.id === -1);
  if (pointer == null) {
    pointer = new pointerPrototype();
  }
  updatePointerDownData(pointer, -1, posX, posY);
});

canvas.addEventListener('mousemove', (e) => {
  let pointer = pointers[0];
  if (!pointer.down) return;
  let posX = scaleByPixelRatio(e.offsetX);
  let posY = scaleByPixelRatio(e.offsetY);
  updatePointerMoveData(pointer, posX, posY);
});

window.addEventListener('mouseup', () => {
  updatePointerUpData(pointers[0]);
});

canvas.addEventListener('touchstart', e => {
  e.preventDefault();
  const touches = e.targetTouches;
  while (touches.length >= pointers.length)
    pointers.push(new pointerPrototype());
  for (let i = 0; i < touches.length; i++) {
    let posX = scaleByPixelRatio(touches[i].pageX);
    let posY = scaleByPixelRatio(touches[i].pageY);
    updatePointerDownData(pointers[i + 1], touches[i].identifier, posX, posY);
  }
});

canvas.addEventListener('touchmove', e => {
  e.preventDefault();
  const touches = e.targetTouches;
  for (let i = 0; i < touches.length; i++) {
    let pointer = pointers[i + 1];
    if (!pointer.down) continue;
    let posX = scaleByPixelRatio(touches[i].pageX);
    let posY = scaleByPixelRatio(touches[i].pageY);
    updatePointerMoveData(pointer, posX, posY);
  }
}, false);


window.addEventListener('touchend', e => {
  const touches = e.changedTouches;
  for (let i = 0; i < touches.length; i++) {
    let pointer = pointers.find(p => p.id == touches[i].identifier);
    if (pointer == null) continue;
    updatePointerUpData(pointer);
  }
});

window.addEventListener('keydown', e => {
  if (e.code === 'KeyP')
    config.PAUSED = !config.PAUSED;
  if (e.key === ' ')
    splatStack.push(parseInt(Math.random() * 20) + 5);
});