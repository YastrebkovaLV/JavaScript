// Заменить отрицательные значения (5 задание , цикл for )

let a = [-10,-4,0,1,4,10,-3];

for (let i = 0; i < a.length; i++) {
    if (a[i] < 0) {
        a[i] = -a[i];
    }
    else {
        a[i] *= 1.1;

    }

}

console.log(a);