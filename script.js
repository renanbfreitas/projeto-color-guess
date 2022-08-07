function generateColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `(${r}, ${g}, ${b})`;
}

function addColor() {
  const circles = document.querySelectorAll('.ball');
  for (let i = 0; i < circles.length; i += 1) {
    console.log(generateColor());
    circles[i].style.backgroundColor = `rgb${generateColor()}`;
  }
}

addColor();
