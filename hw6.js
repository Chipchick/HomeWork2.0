//Задача 1

const number = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < number.length; i++) {
    if (number[i] >= 10) {
        console.log(number[i]);
        break;
    }
    console.log(number[i]);
}


//Задача 2

const numb = [1, 5, 4, 10, 0, 3];
const index = numb.indexOf(4);
console.log(index);


//Задача 3

const numbs = [1, 3, 5, 10, 20];
console.log(numbs.join(' '));

//Задача 4

const num = [[1, 1, 1],[1, 1, 1],[1, 1, 1],]
console.log(num);

const num3 = [];
for (let i = 0; i < 3; i++) {
    num3[i] = [];
    for (let j = 0; j < 3; j++) {
        num3[i][j] = 1;
    }
}
console.log(num3);

//Задача 5

const arr = [1, 1, 1];
arr.push(2, 2, 2);
console.log(arr);

//Задача 6

const arr6 = [9, 8, 7, 'a', 6, 5];
arr6.sort();
const filterArr = arr6.filter((el) => typeof el === "number");
console.log(filterArr);

//Задача 7

const a = [9, 8, 7, 6, 5];
let b = Number(prompt("Введите любое число"));
if (a.includes(b)) {
    alert("угадал");
} else {
    alert("Не угадал");
}

//Задача 8

let str = 'abcdef';
let arrStr = str.split('');
let n = arrStr.reverse();
let joinArrStr = n.join('');
console.log(joinArrStr);

//Задача 9

const arr9 = [[1, 2, 3],[4, 5, 6]];
const resalt = [...arr9[0], ...arr9[1]];
console.log(resalt);

//Задача 10

const arr10 = [1, 6, 7, 3, 4, 5];
for (let i = 0; i < arr10.length - 1; i++) {
    console.log(arr10[i] + arr10[i + 1])
}

//Задача 11

const arr11 = (arr) => arr.map((el) => el ** 2)
console.log(arr11([3, 5, 2]))

//Задача 12

const string = (arrStr) => arrStr.map (el => el.length);
console.log (string (['дуб', 'пельмень', 'ветер']))

//Задача 13

function filterNegative(arrey) {
    let resalt = arrey.filter(function (el) {
        if (el < 0) {
            return true
        } else {
            return false
        }
    })
    return resalt;
}
console.log(filterNegative([2, -4, 7, -9]))

//Задача 14

let originalArray = [];
let evenArray = [];

for (let i = 0; i < 10; i++) {
  originalArray.push(Math.floor(Math.random() * 11));
}

evenArray = originalArray.filter(num => num % 2 === 0);

console.log( originalArray);
console.log( evenArray);

//Задача 15

const againArray = [];

for (let i = 0; i < 6; i++) {
    againArray.push(getRandomNumber(0,10));
}
console.log (againArray);
let sumAgainArray = againArray.reduce((total, number) => total + number, 0); 
const midAgainArray = sumAgainArray / againArray.length
console.log (midAgainArray)