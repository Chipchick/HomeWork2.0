//Задача 1

function smallerNumber(a, b) {
    return (a < b) ? a : b;
}
console.log(smallerNumber(1, 2));
console.log(smallerNumber(7, 7));

//задача 2

function oddNumber(n) {
    if (n % 2 === 0) {
        console.log("Четное");
    } else {
        console.log("Нечетное");
    }
}
oddNumber(15)
oddNumber(30)

//Задание 3.1

function squareNumber(n) {
    let square = n * n;
    console.log(square);
}
squareNumber(5);

//Задание 3.2
function returnSquare(n) {
    return n * n;
}

console.log(returnSquare(4));

//Задача 4

function ageUser() {
    let a = prompt("Сколько вам лет?");
    if (a < 0) {
        alert("Вы ввели неверное значение");
    } else if (a > 0 && a < 12) {
        alert("Привет, друг!");
    } else {
        alert("Добро пожаловать!");
    }
}
ageUser();

//Задача 5

function Numbers(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return 'Одно значений не является числом';
    } else {
        return num1 * num2;
    }
}

//Задача 6

function UserNumber() {
    let n = prompt("Введите число");
    if (isNaN(n)) {
        return "Это не число!";
    } else {
        let result = Math.pow(n, 3);
        return `${n} в кубе равняется ${result}`;
    }

}

for (let i = 0; i <= 10; i++) {
    console.log(UserNumber(i));
}


//Задача 7

let circle1 = {
    radius: 6,
    getArea: function () {
        return Math.PI * this.radius * this.radius;
    },
    getPerimeter: function () {
        return 2 * Math.PI * this.radius;
    }
}

let circle2 = {
    radius: 7,
    getArea: function () {
        return Math.PI * this.radius * this.radius;
    },
    getPerimeter: function () {
        return 2 * Math.PI * this.radius;
    }
}

console.log("Площадь круга 1: " + circle1.getArea());
console.log("Периметр круга 1: " + circle1.getPerimeter());

console.log("Площадь круга 2: " + circle2.getArea());
console.log("Периметр круга 2: " + circle2.getPerimeter());




