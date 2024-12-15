// Ромб (11 задание , цикл for )

let a = 9;

for (let i = 1; i <= a; ++i) {
    let probel = ''.repeat(a-i);
    let star = '*'.repeat(i);
    console.log(probel + star);
}

for (let i = a-1; i >= 1; --i) {
    let probel = ''.repeat(a-i);
    let star = '*'.repeat(i);
    console.log(probel + star);
}