"use strict";

// Условия 

if (1) {
    console.log('Ok!');
} else {
    console.log('Error')
}



// Тернарный Оператор JS когда 3 условия

/* if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('Ok!')
} */

(num === 50) ? console.log('Ok!') : console.log('Error');

// Бенарный Аргумент 
4 + 4 

// Унарный Аргумент
+'4'; // работает только с одной строкой

const num = 50;

switch (num) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 50: 
        console.log('В точку!');
        break;
    default: 
        console.log('Не в этот раз');
        break;
};