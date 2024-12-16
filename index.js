// Вывод ключей через запятую (4 задание , цикл for in)

const person = {age: 10, name: "", child: null};
let keys = '';

for (let key in person) {
    keys += key + ',';
}

keys = keys.slice(0,-2);

console.log(keys);