// Мин,макс,среднее (1 задание , цикл for of)

const a = [122121, 7, 333, 5, 1];
let min, max, sum = 0 , b = 0;

for (const number of a) {
    if (min === undefined || a < min) {
        min = number;
    }
    if (max === undefined || number > max) {
        max = number;
    }
    sum += number;
    b++;
}

const average = sum / b;

console.log('Минимальное:', min);
console.log('Максимальное:', max);
console.log('Среднее:', average);