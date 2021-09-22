let isDrawing = false;
let x = 0;
let y = 0;
let xCoordArr = [];
let yCoordArr = [];

const myPics = document.getElementById('canvas');
const ctx = myPics.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.display = 'block'


myPics.addEventListener('mousedown', e => {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
});


myPics.addEventListener('mousemove', e => {
  if (isDrawing === true) {
    //drawLine(ctx, x, y, e.offsetX, e.offsetY); рисует линию, если зажать
    x = e.offsetX;
    y = e.offsetY;
    xPushCoords(x)
    yPushCoords(y)
  }
});

window.addEventListener('mouseup', e => {
  if (isDrawing === true) {
    isDrawing = false;
    drawCircle();
    x = 0;
    y = 0;
    xCoordArr = [];
    yCoordArr = [];
  }
});

function drawLine(ctx, x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.strokeStyle = "black"
  ctx.lineWidth = 2;
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.closePath();
}

function drawCircle() {
  let maxX = getMaxOfArray(xCoordArr)
  let minX = getMinOfArray(xCoordArr)
  let maxY = getMaxOfArray(yCoordArr)
  let minY = getMinOfArray(yCoordArr)
  let centerX = ((maxX - minX) / 2) + minX
  let centerY = ((maxY - minY) / 2) + minY
  let radius = maxX - centerX
  ctx.beginPath();
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 2;
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2, true)
  ctx.stroke();
  ctx.closePath();
}

function xPushCoords(coord) {

  if (isDrawing) {
    xCoordArr.push(coord)
  }
}
function yPushCoords(coord) {

  if (isDrawing) {
    yCoordArr.push(coord)
  }
}

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
function getMinOfArray(numArray) {
  return Math.min.apply(null, numArray);
}
