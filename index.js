// Гласные буквы (2 задание , цикл for of)

let slovo = "хрюхрю_хахаахахахха";
const abc = ['а', 'у', 'о', 'ы', 'и', 'э', 'я', 'ю', 'ё', 'е'];
let a = 0;
let b = 0;

for (const char of slovo) {
    if (abc.includes(char.toLowerCase())) {
        a++;
    } else if (char.match(/[а-яё]/i)) {
        b++;
    }
}

console.log(`Гласные: ${a}, Негласные: ${b}`);