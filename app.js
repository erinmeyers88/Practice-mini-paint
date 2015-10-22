$(document).ready(function() {
  
var color = 'white';  
var colors = 'white green red blue yellow';  
  
  $('.box').on('click', function() {
    $(this).addClass(color);
  })
  
  
  
  $('.box').on('dblclick', function() {
    $(this).removeClass(colors);
  })
  
  
  
  $('#reset').on('click', function() {
    $('.box').removeClass(colors)
  })
  
  
  
  $('#red').on('click', function() {
    $(this).removeClass(colors);
    color = 'red';
  })

  $('#blue').on('click', function() {
    $(this).removeClass(colors);
    color = 'blue';
  })

  $('#green').on('click', function() {
    $(this).removeClass(colors);
    color = 'green';
  })

  $('#yellow').on('click', function() {
    $(this).removeClass(colors);
    color = 'yellow';
  })

  $('#white').on('click', function() {
    $(this).removeClass(colors);
    color = 'white';
  })
  
  //Makes it so you can drag
  
  var isPressed = false;
  
  $(".box").on("mousedown", function(){
    isPressed = true;
  })
  
  $(".box").on("mouseup", function(){
    isPressed = false;
  })
  
  $(".box").on("mouseenter", function() {
    if (isPressed) {
      $(this).removeClass(colors);
      $(this).addClass(color);
    }
  })
  
})