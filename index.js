// Вывести вторую половину (8 задание , цикл for )

let a = ["bbb","bbbbbb","bbbbb","bbbbbb","bbbbb","bbbbbbbb","bbbbbbb","bbbb"];
let index = Math.floor(a.length/2);

for (let i = index ; i < a.length; i++) {
    console.log(a[i]);
}