//your JS code here. If required.
let line = document.getElementById("line");
setInterval(lineRotate, 20);
let angle = 0;
function lineRotate() {
    angle = angle + 2;
    if(angle == 360){
        angle = 0;
    }
	line.style.transform = `rotate(${angle}deg)`;
}
