var mouseEvent = "empty";
var last_position_of_mouseX, last_position_of_mouseY;

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var color = "black";
var lineWidth = 1;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color = document.getElementById("color").value;
    lineWidth = document.getElementById("lineWidth").value;
    mouseEvent = "mousedown";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    var current_position_of_mouseX = e.clientX - canvas.offsetLeft;
    var current_position_of_mouseY = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;

        ctx.moveTo(last_position_of_mouseX, last_position_of_mouseY);

        ctx.lineTo(current_position_of_mouseX, current_position_of_mouseY);
        ctx.stroke();
    }
    last_position_of_mouseX = current_position_of_mouseX;
    last_position_of_mouseY = current_position_of_mouseY;
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent = "mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent = "mouseleave";
}

function clearArea(){
ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
}

    var last_position_of_x, last_position_of_y;

     width = screen.width;
     new_width = screen.width - 70;

     height = screen.height;
     new_height = screen.height - 300;
    
    if (width < 992){
        document.getElementById('myCanvas').width= new_width;
        document.getElementById('myCanvas').height = new_height;

        document.body.style.overflow = 'hidden';
    }

    canvas.addEventListener("touchstart", my_touchstart);

    function my_touchstart(e)
    { 
        //Addictonal Activity start
        color = document.getElementById("color").value;
        lineWidth = document.getElementById("lineWidth").value;
        //Addictonal Activity ends
        last_position_of_x = e.touches[0].clientX - canvas.offsetLeft; 
        last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
    }

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
         var current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft; 
         var current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
    
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;

        ctx.moveTo(last_position_of_x, last_position_of_y);

        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }