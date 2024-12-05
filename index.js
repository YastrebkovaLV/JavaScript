// Случайность (1 задание, while)

let number = 2;

let randomNumber;

while (true) {
    randomNumber = Math.random();
    number++;

    if (randomNumber > 0.95) {
        break;
    }
}

console.log(number);
