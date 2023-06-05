// Задание 1
const result = prompt('Введите значение:')
if (typeof +result !== 'number') {
    alert('Упс, кажется, вы ошиблись')
  } else if (isNaN(result % 2)) {
    alert('Ошибка, введено НЕ ЧИСЛО')
  } else if (result % 2 === 0) {
    alert('Число четное')
  } else {
    alert('число нечетное')
  }

// Задание 2
let x = 1,
  res;
switch (typeof x !== 'symbol' && (isFinite(x) || typeof(x) === "string") && typeof(x)) {
  case "number":
    res = "x - число";
    break;
  case "string":
    res = "x - строка";
    break;
  case "boolean":
    res = "x - логическое";
    break;
  default:
    res = "Тип x не определен";
}
console.log(res);

// Задание 3
const str = 'Hello';
const reverse = str.split('').reverse().join('');
console.log(reverse);

// Задание 4
console.log(Math.floor(Math.random() * 100) + 1);

// Задание 5
const masNumb = [7, 14, 21];
console.log(masNumb.length);
for (let i = 0; i < masNumb.length; i++){
  console.log(masNumb[i]);
}

// Задание 6
let masArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 's'];
let theSame = true;
for (let i = 0; i < masArr.length - 1; i++){
    for (let j = i + 1; j < masArr.length; j++){
        if (typeof(masArr[i]) !== typeof(masArr[j])){
            theSame = false;
        }
    }
}
if (theSame) {
    console.log("array is the same");
} else {
    console.log("array is not the same");
}

// Задание 7
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'd', null, 'e'];
let countEven = 0;
let countOdd = 0;
let countOther = 0;

for (let i = 0; i < arr.length; i++){
    if ((arr[i] === 0) || (typeof(arr[i]) != 'number')) {
        countOther++;
    } else {
        if (arr[i] % 2 === 0) {
            countEven++;
        } else {
            countOdd++;
        }
    }
}

console.log("Even is " + countEven);
console.log("Odd is " + countOdd);
console.log("Other is " + countOther);

// Задание 8
let users = new Map();
users.set("student 1", "grade A");
users.set("student 2", "grade B");
users.set("student 3", "grade A");
users.set("student 4", "grade B");
users.set("student 5", "grade A");
users.set("student 6", "grade C");
users.set("student 7", "grade A");

for (let user of users.keys()){
    console.log(user + " is " + users.get(user));
}

