// Отримуємо випадкове число від 0 до size
var getRandomNumber = function (size) {
  return Math.floor(Math.random() * size);
};

// Вираховуємо відстань між подією та ціллю
var getDistance = function (event, target) {
  var diffX = event.offsetX - target.x;
  var diffY = event.offsetY - target.y;
  return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

// Отримуємо рядок, що показує відстань
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

// Налаштовуємо наші змінні параметри
var width = 400;
var height = 400;
var clicks = 0;

// Створюємо випадкову локацію target
var target = {
  x: getRandomNumber(width),
  y: getRandomNumber(height)
};

// Додаємо маніпулятор кліків до елемента img
$("#map").click(function (event) {
  clicks++;
});

// Отримуємо відстань між event і target
var distance = getDistance(event, target);

// Конвертуємо відстань у підсказку
var distanceHint = getDistanceHint(distance);

// Оновлюємо #distance-елемент новою підсказкою
$("#distance").text(distanceHint);

// Якщо клік було зроблено достатньо близько,
// кажемо гравцеві, що він переміг
if (distance < 8) {
  alert("Found the treasure in " + clicks + " clicks!");
}