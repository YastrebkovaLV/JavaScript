// Округлить значения (6 задание , цикл for )

let a = [1.1,2.2,-2,3.3,-1,5.5,5.99,7.49,7.9999,-2.2];
let b = 0;

for (let i = 0; i < a.length; i++) {
    if (a[i] > 0) {
        if (b<3) {
            b++;
        }
        else {
            a[i] = Math.round(a[i]);
        }
    }
}

console.log(a);