var getRandomNumber = function (size) {
  return Math.floor(Math.random() * size);
};

var width = 400;
var height = 400;

var target = {
  x: getRandomNumber(width),
  y: getRandomNumber(height)
};

var clicks = 0;

$("#map").click(function (event) {
  clicks++;
});

var getDistance = function (event, target) {
  var diffX = event.offsetX - target.x;
  var diffY = event.offsetY - target.y;
  return Math.sqrt((diffX * diffX) + (diffY * diffY));
};