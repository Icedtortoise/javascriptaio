const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyPress);
let xposition = 0;
let yposition = 0;

function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    xposition = xposition - 20;
  }
  if (e.code === "ArrowRight") {
    xposition = xposition + 20;
  }
  if (e.code === "ArrowUp") {
    yposition = yposition - 20;
  }
  if (e.code === "ArrowDown") {
    yposition = yposition + 20;
  }
  if (xposition < 0) {
    xposition = 0;
  }
  if (yposition < 0) {
    yposition = 0;
  }
  refresh();
}
function refresh() {
  ball.style.left = xposition + "px";
  ball.style.top = yposition + "px";
}
