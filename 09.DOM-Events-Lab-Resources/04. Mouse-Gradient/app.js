function attachGradientEvents() {
  let rectangle = document.getElementById('gradient');
  rectangle.addEventListener('mousemove', onClick);

  function onClick(event) {
    const x = event.offsetX;
    const persent = Math.floor((x / 300) * 100);
    document.getElementById('result').textContent = `${persent}%`;
  }
}
