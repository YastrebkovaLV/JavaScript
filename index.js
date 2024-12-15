// Вывод чисел (1 задание , цикл for )

// от 0 до 100

for (let i = 0; i <= 100; i++) {
    console.log(i);
}

// от -100 до 0

for (let i = -100 ; i <= 0; i++) {
    console.log(i);
}

// от 100 до 0

for (let i = 100 ; i >= 0; i--) {
    console.log(i);
}

// Четные числа

for (let i = 0 ; i <= 100; i+= 2) {
    console.log(i);
}

// Вывод чисел 0 и 100, делятся на 3 или на 5

for (let i = 0; i <+ 100; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        console.log(i);
    }
}

// Вывод между 0 и 1000, сумма первой и последней цифры равна 10

for (let i = 0; i <= 1000; i++) {
    let num = i.toString();
    let first = Number(num[0]);
    let last = Number(num[num.length - 1]);
    if (first + last === 10) {
        console.log(i);
    }
}