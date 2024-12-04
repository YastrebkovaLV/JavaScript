// Одно число (2 задание,условия)

const number = 122;

if (number % 1 === 0) {
    console.log("Число целое");
}
else {
    console.log("Число не целое");
}

if (number % 2 === 0) {
    console.log("Число четное ")
}
else {
    console.log("Число не четное")
}

const numStr = number.toString();
const firstNumber = parseInt(numStr[0]);
const lastNumber = parseInt(numStr[numStr.length - 1]);

const sum = firstNumber + lastNumber;
console.log(` Сумма первой и последней цифры : ${sum}`);