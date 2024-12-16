// Вывод пар ключ-значение (2 задание , цикл for in)

const person = {age:10 ,name:' ', child: 'Max'};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}