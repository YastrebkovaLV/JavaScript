// Ёлочка (12 задание , цикл for )

let a = 5;

for (let i = 0; i < a; ++i) {
    let star = '*'.repeat(2*i + 1);
    let probel = ' '.repeat(a - i - 1);
    console.log(star+probel);
}