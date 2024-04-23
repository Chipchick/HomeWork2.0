function wordsGame() {
  let words = [
    "Яблоко",
    "Груша",
    "Дыня",
    "Виноград",
    "Персик",
    "Апельсин",
    "Мандарин",
  ];

  words = words.sort(() => Math.random() - 0.5);

  alert(words);

  let firstWord = prompt("Чему равнялся первый элемент массива?");
  let lastWord = prompt("Чему равнялся последний элемент массива?");

  if (firstWord === words[0] && lastWord === words[words.length - 1]) {
    alert("Поздравляем!Вы угадали оба элемента!");
  } else if (firstWord === words[0] || lastWord === words[words.length - 1]) {
    alert("Вы были близки к победе!");
  } else {
    alert("Вы ответили неверно.");
  }
}
