// Умножение числовых полей (3 задание , цикл for in)

const person = { age:10 , name: "", credit: 100};

for (let key in person) {
    person[key] *= typeof person[key] === "number" ? 1.2 : 1;
}

console.log(person);