canvas = document.getElementById("mycanvas");
color = "blue";
ctx = canvas.getContext("2d");

var mouseevent = "";
canvas.addEventListener("mousedown", mymousedown);
function mymousedown(e) {

    mouseevent = "mousedown"
    console.log(mouseevent);
}
canvas.addEventListener("mouseup", mymouseup);
function mymouseup(e) {
    mouseevent = "mouseup"
    console.log(mouseevent);
}

canvas.addEventListener("mouseleave", mymouseleave);
function mymouseleave(e) {
    mouseevent = "mouseleave"
    console.log(mouseevent);
}

canvas.addEventListener("mousemove", mymousemove);
function mymousemove(e) {
    console.log(mouseevent);
    mousex = e.clientX - canvas.offsetLeft;
    mousey = e.clientY - canvas.offsetTop;
    if (mouseevent == "mousedown") {
        console.log(mousex + " " + mousey)
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        //ctx.moveTo(lastmousex,lastmousey);
        //ctx.lineTo(mousex,mousey);
        ctx.arc(mousex, mousey, 30, 0, 360);
        ctx.stroke();
     }
     lastmousex=mousex;
     lastmousey=mousey;
}








