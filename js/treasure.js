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

var getDistanceHint = function (distance) {
  if (distance < 10) {
    return "Boiling hot!";
  } else if (distance < 20) {
    return "Really hot!";
  } else if (distance < 40) {
    return "Hot!";
  } else if (distance < 80) {
    return "Warm!";
  } else if (distance < 160) {
    return "Cold!";
  } else if (distance < 320) {
    return "Really cold!";
  } else {
    return "Freezing!"
  }
};