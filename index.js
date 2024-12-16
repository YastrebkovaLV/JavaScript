// Уникальные элементы (5 задание , цикл for of)

const arr1 = ['Ivan','Kovan','C',0,1];
const arr2 = ['Kovan','NeIvan','D',1,3];

const common = [];

for (const arr of arr1) {
    if (!arr2.includes(arr) && !common.includes(arr)) {
        common.push(arr);
    }
}
    for (const arr of arr2) {
        if (!arr1.includes(arr) && !common.includes(arr)) {
            common.push(arr);
        }
    }

    console.log(common);