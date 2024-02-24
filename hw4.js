
//Задача 1
/*let i = 0;
while (i < 2) {
    console.log("Привет");
    i++;
}

//Задача 2
for (let i = 1; i < 6; i++) {
    console.log(i)
}

//Задача 3
for (let i = 7; i <= 22; i++) {
    console.log(i)
}*/

//Задача 4
const obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
}
for (let salary in obj) {
    console.log(`${salary} - зарплата ${obj[salary]} долларов`);
}

//Задача 5
let n = 1000;
let num = 0;

while (n > 50) {
    n = n / 2;
    num++;
}
console.log(`Получилось число ${n}. Число итераций равно ${num}`);

//Задача 6
for (let i = 1; i <= 31; i += 7) {
    console.log(`Сегодня пятница ${i}-е число. Необходимо подготовить отчет.`)
}
