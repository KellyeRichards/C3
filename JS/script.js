// let canvas = document.getElementById("myCanvas");
// let ctx = canvas.getContext("2d");

// // Draw a rectangle
// ctx.fillStyle = "#ff0000";
// ctx.fillRect(50, 50, 100, 100);

// // Draw a circle
// ctx.beginPath();
// ctx.arc(200, 200, 50, 0, 2*Math.PI);
// ctx.fillStyle = "#00ff00";
// ctx.fill();

// !In the above example, an HTML file is created with a <canvas> tag that has an id myCanvas and dimensions of 400 pixels width and height. The <style> tag defines a border for the canvas container.

// In the JavaScript section, the canvas variable is assigned the element with ID myCanvas. The getContext() method is used to get the 2D rendering context of the canvas. Then, two shapes are drawn on the canvas using the fillRect() and arc() methods. The fillStyle property is used to set the color of the shapes.

// When the HTML file is loaded in a browser, the canvas container is created, and the JavaScript code draws a rectangle and a circle on it dynamically.

// This is just a basic example, and there are many other drawing methods available in the <canvas> tag that can be used to create more complex graphics and animations.
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

// Set initial position of the square
let x = 50;
let y = 50;
let width = 50;
let height = 50;

// Draw the square
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ff0000";
  ctx.fillRect(x, y, width, height);
}

// Move the square
function move() {
  x += 5;
  y += 5;
  if (x > canvas.width - width || y > canvas.height - height) {
   x = 50;
   y = 50;
  }
   draw();
setTimeout(move, 50);
}

// Start the animation
move();

// In the above example, a square is drawn at an initial position using the fillRect() method. The draw() function clears the canvas and redraws the square at a new position.

// The move() function updates the x and y coordinates of the square by adding 5 pixels in each direction. If the square reaches the edge of the canvas, it resets back to the initial position. The setTimeout() method is used to repeatedly call the move() function every 50 milliseconds, creating an animation effect.

// When the HTML file is loaded in a browser, a red square moves diagonally across the canvas. You can change the speed and direction of the square by modifying the move() function.

