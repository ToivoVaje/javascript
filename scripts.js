
// function for clearing the screen
function clearCanvas() {
  var c_canvas = document.getElementById("canvas");
  c_canvas.width = c_canvas.width;
  window.count=0;
}

// requestAnim shim layer by Paul Irish
    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    || 
              window.oRequestAnimationFrame      || 
              window.msRequestAnimationFrame     || 
              function(/* function */ callback, /* DOMElement */ element){
                window.setTimeout(callback, 1000 / 60);
              };
    })();
  
// example code from mr doob : http://mrdoob.com/lab/javascript/requestanimationframe/

var canvas, context, toggle;

init();
animate();

function init() {
    canvas = document.getElementById("canvas");
    context = canvas.getContext( '2d' );
    document.body.appendChild( canvas );
}

function animate() {
    requestAnimFrame( animate );
    draw();
}

function draw() {

    var time = new Date().getTime() * 0.002;
    var x = Math.sin( time ) * 192 + 256;
    var y = Math.cos( time * 0.9 ) * 192 + 256;
    toggle = !toggle;

    context.fillStyle = toggle ? 'rgb(200,200,20)' :  'rgb(20,20,200)';
    context.beginPath();
    context.arc( x, y, 10, 0, Math.PI * 2, true );
    context.closePath();
    context.fill();
}