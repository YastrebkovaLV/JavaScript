// Два числа (3 задание,условия)

const number = 123;
const number2 = 22;

// Равенство

if (number === number2) {
    console.log("Числа равны");
}
else {
    console.log("Числа не равны");
}

// Большее и меньшее

if (number > number2) {
    console.log(`Большее число: ${number}`);
    console.log(`Меньшее число: ${number2}`);
}
else if (number < number2) {
    console.log(`Большее число: ${number2}`);
    console.log(`Меньшее число: ${number}`);
}
else {
    console.log("Числа равны");
}

// Проверка делимости

if (number !== 0 && number2 % number === 0) {
    console.log(`${number2} делится на ${number} без остатка`);
}
else if (number2 !== 0 && number % number2 === 0) {
    console.log(`${number} делится на ${number2} без остатка `);
}
else {
    console.log(" Ничего не делится ");
}

// Количество цифр

if (String(number).length === String(number2).length) {
    console.log(" Одинаковое количество ");
}
else {
    console.log(" Разное количество ");
}