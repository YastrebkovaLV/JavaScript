// Случайность (1 задание , while)

let a = 1;
let randomNumber = Math.random();

while (randomNumber <= 0.95 ) {
    a++;
    randomNumber = Math.random();
}

console.log(`количество попыток: ${a}`);