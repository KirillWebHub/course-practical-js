let grandfather = document.getElementById('grandfather');
let father = document.getElementById('father');
let mother = document.getElementById('mother');
let child = document.getElementById('child');

// Обработчик на всплытие (bubbling)
grandfather.addEventListener('click', function() {
  console.log("Grandfather (bubbling)");
});

// Обработчик на погружение (capturing)
father.addEventListener('click', function() {
  console.log("Father (capturing)");
}, true);

// Обработчик button (на обе фазы)
child.addEventListener('click', function() {
  console.log("Child (capturing)");
}, true);

child.addEventListener('click', function() {
  console.log("Child (bubbling)");
});