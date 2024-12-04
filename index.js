// Одна строка (4 задание,условия)

const stroka = "Я изучаю джаваскрипт !";

// Первый символ ,если длина строки четная

if (stroka.length % 2 === 0) {
    console.log(stroka[0]);
    console.log(" Первый символ,длина четная ");
}

// Предпоследний символ, если длина строки нечетная и строка оканчивается на букву "а"

else if (stroka.length % 2 !== 0 && stroka[stroka.length - 1] === 'а') {
    console.log(stroka[stroka.length - 2]);
    console.log(" Предпоследний символ,ваша строка заканчивается на 'а' либо нечетная ");
}

// Последний символ, если длина строки нечетная

else {
    console.log(stroka[stroka.length - 1]);
    console.log(" Длина нечетная ")
}