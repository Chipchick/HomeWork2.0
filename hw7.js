//Задача 1

const str = "js";
str = str.toUpperCase();
console.log(str);

//Задача 2
function filterStrings(array, str) {
    return array.filter(item => item.toLowerCase().startsWith(str.toLowerCase()))
}
console.log(filterStrings(['собака', 'кот', 'русалка', 'Котовасия', 'коТбот'], 'кот'));

//Задача 3
let number = 32.58884;
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));

//Задача 4
let num = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...num));
console.log(Math.max(...num));

//Задача 5
function randomNum() {
    return Math.floor(Math.random() * 10 + 1);
}
console.log(randomNum(0, 10));

//Задача 6
function randomArr(n) {
    let result = [];
    for (let i = 0; i < n / 2; i++) {
        result.push(Math.floor(Math.random() * n));
    }
    return result;
}
console.log(result);

//задача 7
function randomNumb(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(randomNumb(9, 5));

//Задача 8
console.log(new Date());

//Задача 9
const currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

//Задача 10
function formatDate(date) {
    let days = ["Воскресенье", "Понедельник", "Вторник", "Среда",
        "Четверг", "Пятница", "Суббота"];
    let months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    return `Дата: ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} - это
    ${days[date.getDay()]}|\nВремя: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
console.log(formatDate(new Date()));

