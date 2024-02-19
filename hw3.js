/*//Задание 1
let password = 'пароль';
let UserPassword = prompt("Пароль?");
if (UserPassword === password) {
    alert("Молодец!");
} else {
    alert("Нет!");
}

//Задание 2
let c = -9;
if (c > 0 && c < 10) {
    console.log("Верно");
} else {
    console.log("Неверно");
}*/

//Задание 3
let d = 106;
let e = 7;
if (d > 100 || e > 100) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

//Задание 4
let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert(Number(a) + Number(b));

// Задание 5
let monthNumber = String(prompt('Введите номер месяца'));

switch (monthNumber) {
    case '12':
    case '1':
    case '2':
        console.log('зима');
        break;
    case '3':
    case '4':
    case '5':
        console.log('весна');
        break;
    case '6':
    case '7':
    case '8':
        console.log('лето');
        break;
    case '9':
    case '10':
    case '11':
        console.log('осень');
        break;

    default:
        console.log('такого месяца не бывает')
        break;
}