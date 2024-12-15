// Подсчет (9 задание , цикл for )

let a = [1,3,4,5,-3,-555,-2,-5];
let plus = 0;
let minus = 0;

for (let i = 0; i < a.length -1; i++) {
    if(a[i] > 0) {
        plus++;
    }
    else if (a[i] < 0) {
        minus++;
    }
}

console.log(`Положительных : ${plus}`);
console.log(`Отрицательных : ${minus}`);