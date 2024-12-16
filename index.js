//  Сравнение массивов (3 задание , цикл for of)

const arr1 = ['Ivan', 'Kovan'];
const arr2 = ['Kovan', 'Ivan'];

const arr3 = ['A'];
const arr4 = ['A', 'B'];

const arr5 = ['C', 1, false];
const arr6 = [false, 1, 'C'];

const arr7 = [null, 0, 'D'];
const arr8 = ['D', null];

const arr9 = [];
const arr10 = [];

const arr11 = ['0'];
const arr12 = [0];

let a = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;

    let b = true;

    for (const item of arr1) {
        if (!arr2.includes(item)) {
            b = false;
            break;
        }
    }

    return b;
};

console.log(a(arr1, arr2));
console.log(a(arr3, arr4));
console.log(a(arr5, arr6));
console.log(a(arr7, arr8));
console.log(a(arr9, arr10));
console.log(a(arr11, arr12));