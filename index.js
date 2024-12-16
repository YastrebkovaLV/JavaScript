// Ключи и значения (5 задание , цикл for in)

const obj = { a: 1, b: 2, c: 3 };
const keys = [];
const values = [];

for (const [key,value] of Object.entries(obj)) {
    keys.push(key);
    values.push(value);
}

console.log(values);
console.log(keys);