
// function for clearing the screen
function clearCanvas() {
  var c_canvas = document.getElementById("canvas");
  c_canvas.width = c_canvas.width;
}

// start animation
function startAnimation() {
	requestAnimFrame = requestAnimationFrame(startAnimation);
	draw();
}

//stop animation
function stopAnimation() {
  cancelAnimationFrame(requestAnimFrame);
}

var canvas, context, toggle, switched, requestAnimFrame;
var color1 = 'rgb(200,200,20)';
var color2 = 'rgb(20,20,200)';

function init() {
    canvas = document.getElementById("canvas");
    context = canvas.getContext( '2d' );
    document.body.appendChild( canvas );
}

function draw() {

    var time = new Date().getTime() * 0.002;
    var x = Math.sin( time ) * 192 * Math.random() + 256;
    var y = Math.cos( time * 0.9 ) * 192 * Math.random() + 256;
    toggle = !toggle;

    context.fillStyle = toggle ? color1 :  color2;
    context.beginPath();
    context.arc( x, y, 10* Math.random(), 0, Math.PI * 2, true );
    context.closePath();
    context.fill();
}

function switchColors() {
	switched = !switched;
	color1 = switched ? 'rgb(100,20,20)' : 'rgb(200,200,20)';
	color2 = switched ? 'rgb(200,20,100)' : 'rgb(20,20,200)';
}