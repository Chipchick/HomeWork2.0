//Задание 1
/*let a = 10;
let a = 20;
alert(a)

//Задание 2
const year = 2007;
alert(year)

//Задание 3
const userName = 'Брендан Эйх'
alert(userName)

//Задание 4
let a = 10;
let b = 2;
alert(a + b)
alert(a - b)
alert(a * b)
alert(a / b)

//Задание 5
let result = 2 ** 5;
alert(result)
//Задание 6
let a = 9;
let b = 2;
alert(a % b)*/

//Задание 7
let num = 1
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num)

//Задание 8
let age = prompt('Сколько вам лет');
let lastDigits = age % 10;
let lastTwoDigits = age % 100;
if (lastDigits === 1 && lastTwoDigits !== 11) {
    alert(`Вам ${age} год`);
} else if (lastDigits >= 2 && lastDigits <= 4 && (lastTwoDigits < 10 || lastTwoDigits >= 20)) {
    alert(`Вам ${age} годa`);
} else { alert(`Вам ${age} лет`); };


//Задание 9
const user = {
    name: 'Валера',
    age: 24,
    isAdmin: true,
};

// Задание 9.1
user["city of residence"] = "Саров";
// Задание 9.2
user.age = 12;

// Задание 9.3
delete ["city of residence"]

// Задание 9.4
let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);

// Задание 10
let username = prompt("Введите Ваше имя");
alert(`Привет ${username}!`);