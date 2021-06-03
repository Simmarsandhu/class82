var last_positionx,last_positionY;
var mouse_event="Empty";

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="black";
linewidth=2;

canvas.addEventListener("mousedown",mouse_down);

function mouse_down(e){
     color=document.getElementById("Color").value;
     linewidth=document.getElementById("width").value;
    mouse_event="mousedown";


}
canvas.addEventListener("mouseup",mouse_Up);

function mouse_Up(e){
    mouse_event="mouseup";
    
}
canvas.addEventListener("mouseleave",mouse_leave);

function mouse_leave(e){
    mouse_event="mouseleave";
    
}
canvas.addEventListener("mousemove",mouse_move);

function mouse_move(e){
    var current_positionX=e.clientX - canvas.offsetLeft;
    var current_positionY=e.clientY - canvas.offsetTop;
    if(mouse_event=="mousedown"){
         ctx.beginPath();
         ctx.strokeStyle=color;
         ctx.lineWidth=linewidth;
         ctx.moveTo(last_positionx,last_positionY);
         console.log("lastpositionofx= "+last_positionx+ "lastpositionofy= "+last_positionY);
         ctx.lineTo(current_positionX,current_positionY);
         console.log("currentpositionofx= "+current_positionX+ "currentpositionofy= "+current_positionY);
         ctx.stroke();

    }
      last_positionY=current_positionY;
      last_positionx=current_positionX;
      
    
}
function clear_screen(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}



