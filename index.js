// Общие элементы (4 задание , цикл for of)

const arr1 = ['Ivan','Kovan',0,'D'];
const arr2 = ['Kovan','NeIvan',1,0,'C'];

const common = [];

for (const arr of arr1) {
    if (arr2.includes(arr)) {
        common.push(arr);
    }
}

console.log(common);