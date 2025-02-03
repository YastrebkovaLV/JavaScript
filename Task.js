const obj1 = {
    name: 'dsmffekgmeglk',
    age: 2
};

const obj2 = {
    age: 2,
    name: 'djvdgvndkj'
};

const key = Object.keys(obj1);
const key2 = Object.keys(obj2);

let result = true;

if (key.length !== key2.length) {
    result = false;
}

if (result) {
    for (let i = 0; i < key.length; i++) {
        const keys = key[i];

        const a1 = obj1[keys];
        const a2 = obj2[keys];

        if (a1 !== a2) {
            result = false;
            break;
        }
    }
}

console.log(result);